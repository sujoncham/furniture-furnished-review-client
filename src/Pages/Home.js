import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product/Product';
import ProductReview from '../components/Product/ProductReview';

const Home = () => {
    return (
        <div>
            <Product></Product>
            <ProductReview></ProductReview>
            <div className='link-btn'>
            <Link to="/review">See all comments</Link>
            </div>
        </div>
    );
};

export default Home;