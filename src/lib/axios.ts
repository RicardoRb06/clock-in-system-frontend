import axios from 'axios';
import { env } from '../config/env';

export const api = axios.create({
    baseURL: env.VITE_API_URL,
    withCredentials: true,
});

api.interceptors.request.use(
    (config) => {
        console.log("HEADER: ", config.headers);
        console.log("DATA: ", config.data);

        return config;
    }, 
    (error) => {
        console.error();
        return Promise.reject(error);
    }
)