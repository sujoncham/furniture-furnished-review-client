import React from 'react';
import { useNavigate } from 'react-router-dom';

const FurnitureRow = ({furniture}) => {
    const {id, name, description, img, price} = furniture;
    const navigate = useNavigate();

    const handleButton = (id) =>{
        navigate(`/furniture/${id}`);
    }

    return (
        <div className='col-md-4 mb-5'>
        <div className='furniture'>
            <img className='w-100' src={img} alt="" />
            <div className='mt-2'>
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{description}</p>
            <button onClick={()=>handleButton(id)} className='btn btn-primary'>Add to Cart</button>
            </div>
        </div>
        </div>
    );
};

export default FurnitureRow;