import { useNavigate } from 'react-router-dom';

const FurnitureRow = ({furniture}) => {
    const {_id, name, description, img, price} = furniture;
    const navigate = useNavigate();

    const handleButton = (id) =>{
        navigate(`/furniture/${id}`);
    }

    return (
        <div className='col-md-4 mb-5'>
        <div className='furniture'>
            <img className='w-100' src={img} alt="" />
            <div className='mt-2'>
            <h5>{name}</h5>
            <p>{description.slice(0, 100)}...</p>
            <p>Price: ${price}</p>
            <button onClick={()=>handleButton(_id)} className='btn btn-warning'>Add to Cart</button>
            </div>
        </div>
        </div>
    );
};

export default FurnitureRow;