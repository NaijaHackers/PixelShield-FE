export const API_BASE_URL = "/api/"// || 'https://api.whoknow.com/'
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
export type ApiEndpointPath =
    '/upload'

export interface ApiEndpoint {
    method: HttpMethod;
    url: ApiEndpointPath;
}

const endpoints: { [key in ApiEndpoint['url']]: ApiEndpoint } = {
    "/upload": {
        method: 'POST',
        url: '/upload'
    }
}

export default endpoints