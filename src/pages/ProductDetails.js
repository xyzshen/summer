// src/pages/ProductDetails.js
import React from "react";
import MainLayout from "@layouts/MainLayout";

const ProductDetails = ({ match }) => {
    const productId = match.params.id;
    return (
        <MainLayout>
            <div className="mt-5">
                <h1>Product Details for {productId}</h1>
                <p>
                    Here you can find detailed information about the product{" "}
                    {productId}.
                </p>
                <ul>
                    <li>Model: {productId}</li>
                    <li>Long Battery Life: Yes</li>
                    <li>Excellent Camera: Yes</li>
                    <li>Price: $599</li>
                </ul>
            </div>
        </MainLayout>
    );
};

export default ProductDetails;
