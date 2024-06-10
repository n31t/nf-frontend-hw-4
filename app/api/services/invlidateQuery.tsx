import { useMutation, useQueryClient } from "react-query";
import { axiosInstance } from "../apiClient";
import { ProductData } from "../../components/types/product";

const createProduct = async (productData: ProductData) => {
    const response = await axiosInstance.post('/products', productData);
    return response.data;
};

export const useCreateProduct = () => {
    const queryClient = useQueryClient();

    return useMutation(createProduct, {
        onSuccess: () => {
            queryClient.invalidateQueries('products');
        },
        onError: (error) => {
            console.error('Error uploading product:', error);
        },
    });
};
