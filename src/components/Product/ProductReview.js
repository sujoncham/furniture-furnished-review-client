import React, { useEffect, useState } from 'react';
import Item from './Item';

const ProductReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( () =>{
        fetch('productReview.json')
        .then(res => res.json())
        .then(data => setReviews(data));
    }, [])
    return (
        <div>
            <h1>product Review : {reviews.length}</h1>
           <div className='review'>
           {
                reviews.map(review => <Item key={review.id} review={review}></Item>)
            }
            <button>See all reviews</button>
           </div>
        </div>
    );
};

export default ProductReview;