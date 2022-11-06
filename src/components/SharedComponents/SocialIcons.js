import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcons = () => {
    return (
        <div className='d-flex justify-content-start align-items-center gap-3'>
            <Link to="/" className='text-warning bg-warning px-2 py-0 rounded'> <i className='fa fa-twitter text-dark h4'></i> </Link>
            <Link to="/" className='text-warning bg-warning px-2 py-0 rounded'> <i className='fa fa-facebook text-dark h4'></i> </Link>
            <Link to="/" className='text-warning bg-warning px-2 py-0 rounded'> <i className='fa fa-linkedin text-dark h4'></i> </Link>
            <Link to="/" className='text-warning bg-warning px-2 py-0 rounded'> <i className='fa fa-google-plus text-dark h4'></i> </Link>
        </div>
    );
};

export default SocialIcons;