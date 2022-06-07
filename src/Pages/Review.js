import React from 'react';
import ProductReview from '../components/Product/ProductReview';

const Review = () => {
    return (
        <div className='review-page'>
            <h1 className='mt-5'>What your Customer Say!!</h1>
            <ProductReview></ProductReview>
        </div>
    );
};

export default Review;