import axios from "axios";
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com'
})

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

export {
    axiosInstance
};