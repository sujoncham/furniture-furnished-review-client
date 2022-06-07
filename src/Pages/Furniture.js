import React, { useEffect, useState } from 'react';
import FurnitureRow from '../components/Product/Furniture/FurnitureRow';

const Furniture = () => {
    const [furnitures, setFurnitures] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/furniture')
        .then(res => res.json())
        .then(data => setFurnitures(data));
    }, []);
    return (
        <div className='container'>
            <h1 className='mt-5'>Furnitures : {furnitures.length}</h1>
        <div className='row'>
            {
                furnitures.map(furniture => <FurnitureRow key={furniture._id} furniture={furniture}></FurnitureRow>)
            }
        </div>
        </div>
    );
};

export default Furniture;