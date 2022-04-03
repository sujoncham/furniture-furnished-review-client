import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import Item from './Item';

const ProductReview = () => {
    const [reviews, setReviews] = useReview();
    const reviewData = reviews.slice(0, 3);

    return (
        <div>
            <h1>product Review :{reviews.length}</h1>
           <div className='review'>
           {
                reviewData.map(review => <Item key={review.id} review={review}></Item>)
            }
           </div>
           <div className='link-btn'>
            <Link to="/review">See all comments</Link>
            </div>
        </div>
    );
};

export default ProductReview;