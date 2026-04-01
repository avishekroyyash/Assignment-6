import React from 'react';

const Number = () => {
    return (
        <div className='h-[247px] bg-indigo-500 grid grid-cols-3 justify-center items-center text-center  '>
            <div className='border-r-1 border-white'>
                <h1 className='font-extrabold text-[60px] text-white'>50K+</h1>
                <p className='font-medium text-[24px] text-white'>Active Users</p>
            </div>
            <div className='border-r-1 border-white' >
                <h1 className='font-extrabold text-[60px] text-white'>200+</h1>
                <p className='font-medium text-[24px] text-white'>Premium Tools</p>
            </div>
             <div>
                <h1 className='font-extrabold text-[60px] text-white'>4.9</h1>
                <p className='font-medium text-[24px] text-white'>Rating</p>
            </div>
        </div>
    );
};

export default Number;