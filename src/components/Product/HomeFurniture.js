import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeFurniture = () => {
    const [furnitures, setFurnitures] = useState([]);
    const navigate = useNavigate();

    useEffect( ()=>{
        fetch('https://furniture-furnished-server.onrender.com/furniture')
        .then(res => res.json())
        .then(data => setFurnitures(data));
    }, []);

    const homeData = furnitures.slice(-6);

    const handleButton = (id) =>{
        navigate(`/furniture/${id}`);
    }

    return (
        <div className='container mt-5'>
            <h1 className='text-center mt-5 p-5'>Latest Product</h1>
            <div className="row">
                {
                    homeData.map(furniture=> <div 
                        key={furniture._id}
                        furniture={furniture}
                        className='col-md-4 mb-5'>
                        <div className='furniture'>
                            <img className='w-100' src={furniture.img} alt="" />
                            <div className='mt-2'>
                            <h4>{furniture.name}</h4>
                            <p>{furniture.description.slice(0, 100)}...</p>
                            <p>Price: ${furniture.price}</p>
                            <button onClick={()=>handleButton(furniture._id)} className='btn btn-primary'>Add to Cart</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            
        </div>
    );
};

export default HomeFurniture;