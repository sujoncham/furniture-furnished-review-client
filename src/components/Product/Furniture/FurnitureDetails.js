import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const FurnitureDetails = () => {
    const {furnId} = useParams();
    const [furniture, setFurniture] = useState({});

    useEffect( () => {
        fetch(`https://sleepy-thicket-05560.herokuapp.com/furniture/${furnId}`)
        .then(res => res.json())
        .then(data => setFurniture(data));
    }, [furnId]);

    const handleBuy = () =>{
        const name = furniture.name;
        const description = furniture.description;
        const price = furniture.price;
        const img = furniture.img;

        const productDetails = {
            name, 
            description, 
            price,
            img
        };

        fetch('https://sleepy-thicket-05560.herokuapp.com/order', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(productDetails),
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                toast('product ordered successfully');
            }
        })
    }

    return (
        <div className='container mb-5'>
            <h1 className='mt-5'>Furniture Details</h1>
            <div className='row justify-content-between'>
                <div className="col-md-6">
                <img className='w-100' src={furniture.img} alt="" />
                </div>
                <div className="col-md-6">
                <div className='p-1'>
                    <h3>{furniture.name}</h3>
                    <p>{furniture.description}</p>
                    <p>Price: ${furniture.price}</p>
                    <button onClick={handleBuy} className='btn btn-warning w-50'>Buy</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default FurnitureDetails;