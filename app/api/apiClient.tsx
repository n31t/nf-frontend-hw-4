import axios from "axios";
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com'
})

const axiosFileInstance = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1/', 
});

axiosInstance.interceptors.response.use((response) => {
    console.log('Response:', response);
    toast.success("Response successfully received!")

    return response;
},
    (error) => {
        console.log('Error:', error);
        toast.error("Error received!")

        return Promise.reject(error);
    }
)

axiosFileInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken'); 
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    // if (config.data) {
    //     config.data = {
    //         ...config.data,
    //         timestamp: Date.now()
    //     };
    // }
    return config;
}, (error) => {
    return Promise.reject(error);
});

axiosFileInstance.interceptors.response.use((response) => {
    console.log('Response:', response);
    toast.success("Response successfully received!")

    // if (response.data) {
    //   response.data.receivedAt = Date.now();
    // }
    
    return response;
    }, (error) => {
    if (error.response && error.response.status === 401) {
        // toast.error('Authentication Error: Please login again.');
    }
    
    if (error.response) {
        const errorMessage = error.response.data.message || 'An error occurred';
        // toast.error(errorMessage);
    } else {
        // toast.error('An unexpected error occurred.'); 
    }
    
    console.error('Response Error:', error);
    return Promise.reject(error);
    });

export {
    axiosInstance,
    axiosFileInstance
};