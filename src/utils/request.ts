import axios from 'axios';

// 环境变量：后端API域名 https://frontend-4zm.pages.dev
const service = axios.create({
  baseURL: import.meta.env.DEV ? '/frontend-4zm.pages.dev' : import.meta.env.VITE_API_HOST,
  timeout: 15000,
});

// 请求拦截器携带Token
service.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 响应拦截
service.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.error('接口请求错误', err);
    return Promise.reject(err);
  }
);

export default service;