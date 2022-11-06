
import React from 'react';
import SocialIcons from '../components/SharedComponents/SocialIcons';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer bg-dark p-4'>
        <div className='container'>
           <div className='text-center'>
                <h1 className='text-warning'>Furniture Furnished</h1>
                <p className='text-white'>Furniture is considered to be the game-changer in leading furniture industry. <br /> Carefully-chosen raw material, environment-friendly business practice and customer-centric <br /> approach is what made furniture a beloved brand at home and abroad</p>
           </div>
             <div className='social-link row mt-5'>
                <div className='col-md-12 text-center d-flex flex-column justify-content-center align-items-center'>
                    <p className='text-white'>&copy;copyrights reserved 2022, by furniture furnished</p>
                    <SocialIcons /> 
                 </div>
             </div>
        </div>
        </div>
    );
};

export default Footer;