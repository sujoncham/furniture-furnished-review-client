
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
        <div className='container'>
            <h1>Furniture Furnished</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam <br /> corporis sapiente
             aut minima atque, nesciunt minus ea. Autem ex consequuntur <br /> possimus non doloribus quas quis!</p>
             <div className='social-link'>
                 <Link to="/"> <i className='fa fa-twitter'></i> </Link>
                 <Link to="/"> <i className='fa fa-facebook'></i> </Link>
                 <Link to="/"> <i className='fa fa-linkedin'></i> </Link>
                 <Link to="/"> <i className='fa fa-google-plus'></i> </Link>
             </div>
        </div>
        </div>
    );
};

export default Footer;