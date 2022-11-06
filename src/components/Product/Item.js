import './Product.css';

const Item = ({review}) => {
    const {name, img, para, rating} = review;

    const myStyle = {
        width:'75px',
        height: '75px'
    }
    
    return (
        <div className='col-md-4 p-2'>
            <div style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} className='d-flex justify-content-between align-items-center rounded m-2 p-3 h-100'>
                <img style={myStyle} className='rounded-circle border border-danger p-1' src={img} alt="" />
                <div className='item-text p-2'>
                    <h5>{name}</h5>
                    <p>{para}</p>
                    <p>Rating: <span className='rate'>{rating}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Item;