import { useEffect, useState } from 'react';
import FurnitureRow from '../components/Product/Furniture/FurnitureRow';

const Furniture = () => {
    const [furnitures, setFurnitures] = useState([]);

    useEffect( ()=>{
        // fetch('https://sleepy-thicket-05560.herokuapp.com/furniture')
        // .then(res => res.json())
        // .then(data => setFurnitures(data));


        const furnitureData = async () =>{
            const res = await fetch('https://furniture-furnished-server.onrender.com/furniture');
            const data = await res.json();
            setFurnitures(data);
        }
        furnitureData();

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