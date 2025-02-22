import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import apiClient from '@common/api';

export type UploadStatus = 'receiving' | 'analyzing' | 'analysed' | 'failed';

export interface UploadResponse {
    status: UploadStatus;
    message?: string;
    progress?: number;
}

const useUploadStatus = () => {
    const [status, setStatus] = useState<UploadStatus | null>(null);
    const [messages, setMessages] = useState<string[]>([]);

    const uploadImage = useMutation({
        mutationFn: async (file: File) => {
            const formData = new FormData();
            formData.append('file', file);

            const response = await apiClient.post('/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                responseType: 'stream', // Stream responses
            });

            if (!response.data) throw new Error('No response data received');

            const reader = response.data.getReader();
            const decoder = new TextDecoder();

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                try {
                    const parsedData: UploadResponse = JSON.parse(chunk);
                    setStatus(parsedData.status);
                    setMessages((prev) => [...prev, parsedData.message || '']);
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                }
            }
        },
        onError: (error) => {
            console.error('Upload failed:', error);
            setStatus('failed');
        }
    });

    return { uploadImage: uploadImage.mutate, status, messages, isLoading: uploadImage.isPending };
};

export default useUploadStatus;
