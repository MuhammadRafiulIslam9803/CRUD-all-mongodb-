import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' bg-orange-600 p-5 m-5'>
            <Link className=' p-5 rounded-lg text-white' to="/home">Home</Link> 
            <Link className=' p-5 rounded-lg text-white' to="/read">Read</Link>           
        </div>
    );
};

export default Header;          