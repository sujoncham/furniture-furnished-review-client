import React from 'react';
import './Product.css';

const product =  {
    "id": 1,
    "title": "Your Next phone Your best phone",
    "para": "If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.",
    "image": "./images/image-1.jpg"
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