import React from 'react';
import Product from '../components/Product/Product';
import ProductReview from '../components/Product/ProductReview';

const Home = () => {
    return (
        <div>
            <Product></Product>
            <ProductReview></ProductReview>
        </div>
    );
};

export default Home;