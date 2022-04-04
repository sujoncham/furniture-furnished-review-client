import React from 'react';
import useReview from '../../hooks/useReview';
import Item from './Item';

const ProductReview = () => {
    const [reviews, setReviews] = useReview();
    // const reviewData = reviews.slice(0, 3);

    return (
        <div>
            <h3>product Review : {reviews.length}</h3>
           <div className='review'>
           {
                reviews.map(review => <Item key={review.id} review={review}></Item>)
            }
           </div>
           
        </div>
    );
};

export default ProductReview;