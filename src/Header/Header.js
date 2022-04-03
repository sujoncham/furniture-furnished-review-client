import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1>Furniture Furnished</h1>
            <nav className='menu'>
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/review">Review</Link> </li>
                    <li><Link to="/dashboard">Dashboard</Link> </li>
                    <li><Link to="/blogs">Blogs</Link> </li>
                    <li><Link to="/about">About</Link> </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;