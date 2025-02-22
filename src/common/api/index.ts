import axios, { AxiosRequestConfig } from 'axios';
import { getItem, removeItem } from '../utils';
import endpoints, { API_BASE_URL, ApiEndpoint, ApiEndpointPath } from './endpoints';

export function buildUrl(endpoint: ApiEndpoint, params?: Record<string, string | number>): string {
    let url = endpoint.url;
    if (params) {
        for (const [key, value] of Object.entries(params)) {
            (url as string) = url.replace(`{${key}}`, String(value));
        }
    }
    return `${url}`;
}

// Create an Axios instance
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 20000,
});

// Request interceptor
apiClient.interceptors.request.use(
    (config) => {
        config.headers['Authorization'] = `Bearer ${getItem('access_token')}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
apiClient.interceptors.response.use(
    (response) => {
        if (response?.data?.message) {
            console.log({ 'response?.data?.message': response?.data?.message })
        }
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            removeItem('access_token')
            window.location.reload()
            console.log('Unauthorized, logging out...');
        }
        if (error.response?.data?.message ?? error.response?.message) {
            console.log({ 'error.response?.data?.message ?? error.response?.message': error.response?.data?.message ?? error.response?.message })
        }
        return Promise.reject(error);
    }
);

export const apiCall = async <T>(
    endpointPath: ApiEndpointPath,
    data?: unknown,
    params?: Record<string, string | number>
): Promise<T> => {
    const endpoint = endpoints[endpointPath];
    if (!endpoint) {
        throw new Error(`Endpoint ${endpointPath} not found.`);
    }

    const url = buildUrl(endpoint, params);

    const config: AxiosRequestConfig = {
        method: endpoint.method,
        url,
        data,
    };
    // Make the request
    const response = await apiClient(config);
    return response.data as T;
};

export default apiClient;