import axios from 'axios';
import { getStoredAuthToken } from './authToken';

const getAuthorizationToken = () => {
  const token = getStoredAuthToken();
  if (token) {
    return `Bearer ${token}`
  }
  return token;
}

const defaults = {
  baseURL: process.env.API_URL || 'https://localhost:7127/api/',
  headers: () => ({
    'Content-Type': 'application/json',
    'Authorization': getAuthorizationToken(),
  })
};

const api = (method, url, variables) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${defaults.baseURL}${url}`,
      method,
      headers: defaults.headers(),
      params: method === 'get' ? variables : undefined,
      data: method !== 'get' ? variables : undefined
    }).then(
      response => {
        resolve(response.data);
      },
      error => {
        if (error.response) {
          reject(error.response.data);
        }
      },
    );
  });
}

const HttpMethods = {
  get: (url, variables) => api('get', url, variables),
  post: (url, variables) => api('post', url, variables),
  put: (url, variables) => api('put', url, variables),
  patch: (url, variables) => api('patch', url, variables),
  delete: (url, variables) => api('delete', url, variables)
};

export default HttpMethods;