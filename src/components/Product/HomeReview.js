import React from 'react';
import useReview from '../../hooks/useReview';
import Item from './Item';

const ProductReview = () => {
    const [reviews, setReviews] = useReview();
    const reviewData = reviews.slice(0, 3);

    return (
        <div>
            <h1>Showing Review :{reviewData.length} of {reviews.length}</h1>
           <div className='review'>
           {
                reviewData.map(review => <Item key={review.id} review={review}></Item>)
            }
           </div>
           
        </div>
    );
};

export default ProductReview;