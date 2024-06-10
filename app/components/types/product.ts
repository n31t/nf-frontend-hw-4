export interface Product {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
    title: string;
}

export interface ProductData {
    title: string;
    price: string;
    description: string;
    image: string | undefined;
    category: string;
}