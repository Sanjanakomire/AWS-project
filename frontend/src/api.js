// src/api.js
import axios from 'axios';


export const fetchProducts = async () => {
try {
    const response = await axios.get('http://localhost:5000/api/products');
    return response.data;
} catch (error) {
    console.error("Error fetching products:", error);
    return [];
}
};

// Mock function to fetch a product by ID
export const fetchProductById = async (id) => {
try {
    const response = await axios.get(`http://localhost:5000/api/products/${id}`);
    return response.data;
} catch (error) {
    console.error("Error fetching product:", error);
    return null;
}
};

// Mock function to handle checkout process
export const handleCheckout = async (cart) => {
try {
    const response = await axios.post('http://localhost:5000/api/checkout', { cart });
    return response.data;
} catch (error) {
    console.error("Error during checkout:", error);
    return { success: false };
}
};
