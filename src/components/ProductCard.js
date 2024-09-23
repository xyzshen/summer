// src/components/ProductCard.js
import React from "react";
import { Card } from "react-bootstrap";

const ProductCard = ({ title, description }) => {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/images/product1.jpg" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Link href="#">More Details</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
