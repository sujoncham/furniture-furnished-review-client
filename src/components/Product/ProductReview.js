import React from 'react';
import useReview from '../../hooks/useReview';
import Item from './Item';

const ProductReview = () => {
    const [reviews] = useReview();
    // const reviewData = reviews.slice(0, 3);

    return (
        <div className='container mt-5 mb-5'>
            <h3 className='p-1'>Product Review : {reviews.length}</h3>
           <div className='row'>
           {
                reviews.map(review => <Item key={review.id} review={review}></Item>)
            }
           </div>
           
        </div>
    );
};

export default ProductReview;