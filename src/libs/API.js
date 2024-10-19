import axios from 'axios';

// Lấy biến môi trường VITE_API_BASE_URL hoặc sử dụng giá trị mặc định nếu không tồn tại
const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

const API = axios.create({
    baseURL: baseURL + '/v1/admin/',  // Thêm 'api' vào baseURL nếu cần
    headers: {
        'Content-Type': 'application/json',
    },
});

// Thêm request interceptor để gắn token nếu có
API.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default API;
