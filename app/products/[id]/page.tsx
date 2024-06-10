import React from "react";
import { Product } from "@/app/components/types/product";

const ProductPage = ({ product } : { product : Product}) => {
    return (
        <div>
            <h1>We don't need it in this homework</h1>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <img src={product.image} alt={product.title} />

        </div>
    )
}

export default ProductPage;