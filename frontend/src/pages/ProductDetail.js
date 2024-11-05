// src/pages/ProductDetail.js
import React, { useEffect, useState } from 'react';
import { fetchProductById } from '../api';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
const { id } = useParams();
const [product, setProduct] = useState(null);

useEffect(() => {
    const loadProduct = async () => {
    const productData = await fetchProductById(id);
    setProduct(productData);
    };
    loadProduct();
}, [id]);

if (!product) return <div>Loading...</div>;

return (
    <div>
    <h1>{product.name}</h1>
    <p>{product.description}</p>
    <p>Price: ${product.price}</p>
    </div>
);
};

export default ProductDetailPage;
