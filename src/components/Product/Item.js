import React from 'react';

const Item = ({review}) => {
    const {name, img, para, rating} = review;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div>
                <p>{name}</p>
                <p>{para}</p>
                <p>Rating: {rating}</p>
            </div>
        </div>
    );
};

export default Item;