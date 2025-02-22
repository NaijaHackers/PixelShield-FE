import { create } from 'zustand';

export interface IStore {
    uploadedFiles: File[];
}

export interface IStoreActions {
    addUploadedFiles: (files: File[]) => void;
    setUploadedFiles: (files: File[]) => void;
}

const ALLOWED_IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];
const ALLOWED_VIDEO_EXTENSIONS = ['mp4', 'mov', 'avi', 'mkv', 'webm'];

const useStore = create<IStore & IStoreActions>((set) => ({
    uploadedFiles: [],

    addUploadedFiles: (files: File[]) =>
        set((state) => ({ uploadedFiles: [...state.uploadedFiles, ...files] })),
    setUploadedFiles: (files: File[]) =>
        set(() => ({ uploadedFiles: files }))
}));

export { ALLOWED_IMAGE_EXTENSIONS, ALLOWED_VIDEO_EXTENSIONS };
export default useStore;