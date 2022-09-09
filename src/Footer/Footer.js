
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
        <div className='container'>
            <h1 className='text-warning'>Furniture Furnished</h1>
            <p>Furniture is considered to be the game-changer in leading furniture industry. <br /> Carefully-chosen raw material, environment-friendly business practice and customer-centric <br /> approach is what made furniture a beloved brand at home and abroad</p>
             <div className='social-link'>
                 <Link to="/" className='text-warning'> <i className='fa fa-twitter text-dark h4'></i> </Link>
                 <Link to="/" className='text-warning'> <i className='fa fa-facebook text-dark h4'></i> </Link>
                 <Link to="/" className='text-warning'> <i className='fa fa-linkedin text-dark h4'></i> </Link>
                 <Link to="/" className='text-warning'> <i className='fa fa-google-plus text-dark h4'></i> </Link>
             </div>
        </div>
        </div>
    );
};

export default Footer;