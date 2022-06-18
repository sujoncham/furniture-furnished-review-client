import './Product.css';

const product =  {
    "id": 1,
    "title": "Explore our furniture & home furnishing product",
    "para": "Furnished Furniture is proud to offer the your area the best in home furnishings at low prices. Stop into our showroom or visit our website to see all we have what you want to buy.",
    "image": "./images/sofa.png"
  }


const Banner = () => {
    return (
        <div className='container mt-5 mb-5'>
            <div className="row justify-content-center align-items-center">
            <div className='col-md-6'>
                <h1>{product.title}</h1>
                <p>{product.para}</p>
                <button className='btn btn-warning'>see more</button>
            </div>
            <div className='col-md-6'>
                <img className='w-100' src={product.image} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Banner;