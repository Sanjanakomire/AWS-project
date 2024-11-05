// src/pages/ProductListingPage.js
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';

const ProductListing = () => {
const [products, setProducts] = useState([]);

useEffect(() => {
    const loadProducts = async () => {
    const productsData = await fetchProducts();
    console.log("Fetched products:",productsData);
    setProducts(productsData);
    };
    loadProducts();
}, []);

return (
    <div>
    <h1>Product Listings</h1>
    <ul>
        {products.map((product) => (
        <li key={product.id}>{product.name}</li>
        ))}
    </ul>
    </div>
);
};

export default ProductListing;
