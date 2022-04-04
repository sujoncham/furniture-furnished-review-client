import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <h1>Furniture Furnished</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam <br /> corporis sapiente
             aut minima atque, nesciunt minus ea. Autem ex consequuntur <br /> possimus non doloribus quas quis!</p>
             <div social-link>
                 <ul>
                     <li><a href="/home"><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon></a></li>
                     <li><a href="/home"><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon></a></li>
                     <li><a href="/home"><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon></a></li>
                     <li><a href="/home"><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon></a></li>
                     <li><a href="/home"><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon></a></li>
                 </ul>
             </div>
        </div>
    );
};

export default Footer;