'use client';

import React, { useEffect, useState } from "react";

import Header from "../components/layout/header";
import { getProducts } from "../api/services/storeService";
import Footer from "../components/layout/footer";
import ProductCard from "../components/common/productCard";
import { Product } from "../types";


export default function PostsPage() {
    const [products, setProducts] = useState([]);
    // const [isLoading, setIsLoading] = useState<boolean>(true);
    // const [posts, setPosts] = useState([]);
    // const { isAuthenticated } = useAuth();
    // const router = useRouter();

    useEffect(()=> {
        getProducts()
        .then((data) => {
            setProducts(data);
            console.log(data);
        })
    
    })

    return(
        <div className="flex flex-col">
            <Header />
            <div className="p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map((product: Product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}