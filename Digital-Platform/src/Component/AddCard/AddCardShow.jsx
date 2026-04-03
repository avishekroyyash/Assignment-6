import React from 'react';

const AddCardShow = ({item}) => {
    return (
        <div className='px-30 py-5 '>
        <div className='flex justify-between items-center shadow-xl p-10'>
        <div className='flex items-center justify-center gap-5'>
            <div>
                <img className='h-[60ox] w-[60ox]' src={item.icon} alt="product-icon" />
            </div>
            <div>
            <h1 className='font-semibold text-2xl'>{item.name}</h1>
            <p className='text-[#627382]'>${item.price}</p>
            </div>
        </div>
        <button className='btn bg-red-500 text-white'>Remove</button>
        </div>
          
        </div>
    );
};

export default AddCardShow;