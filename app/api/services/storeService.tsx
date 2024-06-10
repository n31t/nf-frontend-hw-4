import { axiosInstance } from "../apiClient";

const getProducts = async () => {
    try {
        const response = await axiosInstance.get('/products');
        return response.data;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}

export {
    getProducts
}