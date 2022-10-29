import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div>
        <h1 style={{ color: 'white', display: 'block' }}>!Oops Page Not Found</h1>
        <Link to='/' className='button btnYellow'>
          Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
