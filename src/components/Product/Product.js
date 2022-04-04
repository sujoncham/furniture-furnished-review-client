import React from 'react';
import './Product.css';

const product =  {
    "id": 1,
    "title": "Explore our furniture & home furnishing product",
    "para": "Furnished Furniture is proud to offer the your area the best in home furnishings at low prices. Stop into our showroom or visit our website to see all we have what you want to buy.",
    "image": "./images/sofa.png"
  }


const Product = () => {
    return (
        <div className='product'>
            <div className='content-left'>
                <h1>{product.title}</h1>
                <p>{product.para}</p>
                <button>see detail</button>
            </div>
            <div className='content-right'>
                <img src={product.image} alt="" />
            </div>
        </div>
    );
};

export default Product;