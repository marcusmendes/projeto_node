import axios from 'axios';
import apiConfig from '../config/auth';

const api = axios.create({
  baseURL: apiConfig[process.env.NODE_ENV].url,
});

export default api;
