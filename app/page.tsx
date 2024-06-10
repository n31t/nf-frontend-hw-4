'use client';

import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Header from "./components/layout/header";
import { getProducts } from "./api/services/storeService";
import Footer from "./components/layout/footer";
import ProductCard from "./components/common/productCard";
import { Product } from "./components/types/product";


export default function PostsPage() {
    // const [products, setProducts] = useState([]);
    const { data: products, error, isLoading, isError } = useQuery('products', getProducts, {
        retry: 3
    });

    // useEffect(()=> {
    //     getProducts()
    //     .then((data) => {
    //         setProducts(data);
    //         console.log(data);
    //     })
    
    // })

    if (isLoading) {
        return (
            <div>
            <Header />
            <div className="min-h-[800px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
            Loading...
            </div>
            <Footer/>
            </div>
        );
    }

    if (isError) {
        return <div>Error: {(error as Error).message}</div>;
    }

    return(
        <div className="flex flex-col">
            <Header />
            <div className="p-4">
                <div className=" min-h-[800px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map((product: Product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}