import React from 'react';
import { useLocation } from 'react-router-dom';

const PaymentStatus = () => {
    const { state } = useLocation();

    return (
        <div>
            <h2>Payment Status</h2>
            <p>{state.message}</p>
        </div>
    );
};

export default PaymentStatus;
