import React from 'react';
import CustomLink from '../components/CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1>Furniture Furnished</h1>
            <nav className='menu'>
                <ul>
                    <li><CustomLink to="/">Home</CustomLink> </li>
                    <li><CustomLink to="/review">Review</CustomLink> </li>
                    <li><CustomLink to="/dashboard">Dashboard</CustomLink> </li>
                    <li><CustomLink to="/blogs">Blogs</CustomLink> </li>
                    <li><CustomLink to="/about">About</CustomLink> </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;