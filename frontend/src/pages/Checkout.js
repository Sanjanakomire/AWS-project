import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {handleCheckout} from '../api';

const Checkout = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const handlePayment = (success) => {
        handleCheckout.post('/checkout', { success }).then((response) => {
            navigate('/payment-status', { state: { message: response.data.message } });
        });
    };

    return (
        <div>
            <h2>Checkout</h2>
            <p>Confirm purchase of: {state.product.name}</p>
            <button onClick={() => handlePayment(true)}>Pay</button>
            <button onClick={() => handlePayment(false)}>Cancel</button>
        </div>
    );
};

export default Checkout;
