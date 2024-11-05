import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Mock eCommerce</h1>
        <nav>
            <Link to="/">Home</Link> | 
            <Link to="/products">Products</Link>
        </nav>
    </header>
);

export default Header;
