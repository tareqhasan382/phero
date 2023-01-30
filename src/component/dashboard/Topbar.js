import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className='topbar w-full'>
      <div className='topbarwrapper flex flex-row justify-between mx-20'>
        <div className='Toplef'>
            <span className='logo text-4xl font-bold text-green-600'>Power-Hack</span>
        </div>
        <div className='TopRight'>
            <h1><Link to="/add" >Add</Link> </h1>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
