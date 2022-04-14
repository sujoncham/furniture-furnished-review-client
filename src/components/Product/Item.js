import React from 'react';
import './Product.css';

const Item = ({review}) => {
    const {name, img, para, rating} = review;

    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='item-single'>
                <h3>{name}</h3>
                <p>{para}</p>
                <p>Rating: <span className='rate'>{rating}</span></p>
                <div className='m-3'>
                    <button className='btn btn-primary w-50'>See details</button>
                </div>
            </div>
        </div>
    );
};

export default Item;