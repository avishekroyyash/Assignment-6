import React from 'react';
import addto from '../../Asset/shopping-cart.png'
const AddEmpty = () => {
    return (
        <div className='flex flex-col justify-center items-center p-20'>
            <img className='h-[100px] w-[100px] text-white' src={addto} alt="" />
            <h1 className='text-3xl text-gray-400'>There are no card add</h1>
        </div>
    );
};

export default AddEmpty;