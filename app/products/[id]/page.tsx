import React from "react";
import Header from "@/app/components/layout/header";
import Footer from "@/app/components/layout/footer";

const ProductPage = ({ params: { id } }: { params: { id: number } }) => {
    return (
        <div>
            <Header />
            <div className=" h-4/5">
            <h1>We don't need it in this homework</h1>
            <p>But here is the id: {id}</p>
            </div>
            <Footer />
        </div>
    )
}

export default ProductPage;