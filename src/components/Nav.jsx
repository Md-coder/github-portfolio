import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Nav = () => {
  return (
    <div className='navbar'>
      <Link to='/' className='link'>
        Home
      </Link>
    </div>
  );
};

export default Nav;
