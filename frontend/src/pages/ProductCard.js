import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
    <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <Link to={`/products/${product.id}`}>View Details</Link>
    </div>
);

export default ProductCard;
