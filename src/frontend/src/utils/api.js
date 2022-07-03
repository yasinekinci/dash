import axios from 'axios';
import { getStoredAuthToken } from './authToken';

const defaults = {
  baseURL: process.env.API_URL || 'https://localhost:7127/api/',
  headers: () => ({
    'Content-Type': 'application/json',
    'Authorization': getStoredAuthToken() ? `Bearer ${getStoredAuthToken()}` : undefined,
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

export default {
  get: (url, variables) => api('get', url, variables),
  post: (url, variables) => api('post', url, variables),
  put: (url, variables) => api('put', url, variables),
  patch: (url, variables) => api('patch', url, variables),
  delete: (url, variables) => api('delete', url, variables)
};
