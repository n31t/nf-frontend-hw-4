import React from "react";

const ProductPage = ({ params: { id } }: { params: { id: number } }) => {
    return (
        <div>
            <h1>We don't need it in this homework</h1>
            <p>But here is the id: {id}</p>
        </div>
    )
}

export default ProductPage;