
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer bg-dark'>
        <div className='container'>
           <div className='text-center '>
           <h1 className='text-warning'>Furniture Furnished</h1>
            <p className='text-white'>Furniture is considered to be the game-changer in leading furniture industry. <br /> Carefully-chosen raw material, environment-friendly business practice and customer-centric <br /> approach is what made furniture a beloved brand at home and abroad</p>
           </div>
             <div className='social-link row mt-5'>
                <div className='col-md-12 text-center'>
                    <p className='text-white'>@all reserved rights 2022, by furniture furnished, </p>
                    <div>
                    <Link to="/" className='text-warning'> <i className='fa fa-twitter text-dark h4'></i> </Link>
                    <Link to="/" className='text-warning'> <i className='fa fa-facebook text-dark h4'></i> </Link>
                    <Link to="/" className='text-warning'> <i className='fa fa-linkedin text-dark h4'></i> </Link>
                    <Link to="/" className='text-warning'> <i className='fa fa-google-plus text-dark h4'></i> </Link>
                    </div>
                 </div>
             </div>
        </div>
        </div>
    );
};

export default Footer;