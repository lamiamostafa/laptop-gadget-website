import React from 'react';
import sleeping from '../../assets/images/sleeping.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>404 Not Found</h2>
            <img className=' img-fluid ' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;