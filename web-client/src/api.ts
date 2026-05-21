import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_URL,
});

// Interceptor for Admin Auth
api.interceptors.request.use((config) => {
  const storage = localStorage.getItem('chevera-v2-storage');
  if (storage) {
    const { state } = JSON.parse(storage);
    if (state.token) {
      config.headers.Authorization = `Bearer ${state.token}`;
    }
  }
  return config;
});

export const vaultApi = {
  getAll: () => api.get('/products').then(res => res.data),
};

export const portfolioApi = {
  getAll: () => api.get('/projects').then(res => res.data),
};

export const inquiryApi = {
  create: (data: any) => api.post('/inquiries', data).then(res => res.data),
};

export default api;
