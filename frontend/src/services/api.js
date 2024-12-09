import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// Add JWT token to each request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const login = (data) => API.post('/auth/login', data);
export const signup = (data) => API.post('/auth/signup', data);
export const getWeather = (city) => API.get(`/weather/${city}`);
export const getReport = () => API.get('/report');
