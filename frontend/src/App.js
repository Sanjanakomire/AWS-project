import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import PaymentStatus from './pages/PaymentStatus';
import ProductCard from './pages/ProductCard';
import Header from './pages/Header';




function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={ProductListing} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/payment-status" component={PaymentStatus} />
          <Route path="/product-card" component={ProductCard} />
          <Route path="/header" component={Header} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
