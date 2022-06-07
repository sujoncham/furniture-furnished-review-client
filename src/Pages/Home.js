import React from 'react';
import { Link } from 'react-router-dom';
import HomeFurniture from '../components/Product/HomeFurniture';
import HomeReview from '../components/Product/HomeReview';
import Product from '../components/Product/Product';

const Home = () => {
    
    return (
        <div className='home-page'>
            <Product></Product>
            <HomeFurniture></HomeFurniture>
            <HomeReview></HomeReview>
            <div className='link-btn'>
            <Link to="/review">Show all comments</Link>
            </div>
        </div>
    );
};

export default Home;