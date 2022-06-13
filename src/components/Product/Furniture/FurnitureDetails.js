import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FurnitureDetails = () => {
    const {furnId} = useParams();

    const [furnitures, setFurnitures] = useState([]);

    useEffect( () => {
        fetch(`https://sleepy-thicket-05560.herokuapp.com/furniture/${furnId}`)
        .then(res => res.json())
        .then(data => setFurnitures(data));
    }, [furnId]);

    return (
        <div className='container mb-5'>
            <h1 className='mt-5'>Furniture Details</h1>
            <div className='row justify-content-between'>
                <div className="col-md-6">
                <img className='w-100' src={furnitures.img} alt="" />
                </div>
                <div className="col-md-6">
                <div className='p-1'>
                    <h3>{furnitures.name}</h3>
                    <p>{furnitures.description}</p>
                    <p>Price: ${furnitures.price}</p>
                    <button className='btn btn-primary w-50'>Buy</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default FurnitureDetails;