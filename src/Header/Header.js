import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import CustomLink from '../components/CustomLink/CustomLink';
import auth from '../components/Firebase/Firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
      };

    return (
        <div className="top-header">
        <div className="container">
            <div className='header'>
            <h1>Furniture Furnished</h1>
            <nav className='menu'>
                <ul>
                    <li><CustomLink to="/">Home</CustomLink> </li>
                    <li><CustomLink to="/review">Review</CustomLink> </li>
                    <li><CustomLink to="/furniture">Furniture</CustomLink> </li>
                    <li><CustomLink to="/dashboard">Dashboard</CustomLink> </li>
                    <li><CustomLink to="/blogs">Blogs</CustomLink> </li>
                    <li><CustomLink to="/about">About</CustomLink> </li>
                    {
                      user ? 
                      <li><button onClick={logout} className='btn btn-link'>LogOut</button></li>
                      :
                       <li><CustomLink to="/login">Login</CustomLink> </li>
                    }
                </ul>
            </nav>
        </div>
        </div>
        </div>
    );
};

export default Header;