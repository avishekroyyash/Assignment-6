import React from 'react';
import userpic from '../../Asset/user.png';
import packagepic from '../../Asset/package.png';
import rocketpic from '../../Asset/rocket.png';
const Steps = () => {
    return (
        <div className=' md:my-10 md:p-25'>
            <h1 className='text-[48px] text-center font-bold '>Get Started in 3 Steps</h1>
            <p className='text-[16px] text-[#627382] text-center'>Start using premium digital tools in minutes, not hours.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5'>
            <div className=' shadow-2xl flex flex-col justify-center items-center 
            py-[88px] px-5 rounded-2xl space-y-3 relative '>
                <div className='bg-indigo-200 p-3 rounded-full'>
                    <img src={userpic} alt="userpic" />
                </div>
                <h2 className='text-[24px] font-bold'>Create Account</h2>
                <p className='text-[#627382] text-center'>Sign up for free in seconds. No credit card
                <br/> required to get started.</p>
                <div className='bg-indigo-600 rounded-full p-2 absolute top-3 right-5'>
                    <p className='text-white '>01</p>
                </div>
            </div>

              <div className=' shadow-2xl flex flex-col justify-center items-center 
              py-[88px] px-5 rounded-2xl space-y-3 relative '>
                <div className='bg-indigo-200 p-3 rounded-full'>
                    <img src={packagepic} alt="userpic" />
                </div>
                <h2 className='text-[24px] font-bold'>Choose Products</h2>
                <p className='text-[#627382] text-center'>Browse our catalog and select the tools that fit your needs.</p>
                <div className='bg-indigo-600 rounded-full p-2 absolute top-3 right-5'>
                    <p className='text-white '>02</p>
                </div>
            </div>

              <div className=' shadow-2xl flex flex-col justify-center items-center
               py-[88px] px-5 rounded-2xl space-y-3 relative '>
                <div className='bg-indigo-200 p-3 rounded-full'>
                    <img src={rocketpic} alt="userpic" />
                </div>
                <h2 className='text-[24px] font-bold'>Start Creating</h2>
                <p className='text-[#627382] text-center'>Download and start using your premium tools immediately.</p>
                <div className='bg-indigo-600 rounded-full p-2 absolute top-3 right-5'>
                    <p className='text-white '>03</p>
                </div>
            </div>
             
         </div>
        </div>
    );
};

export default Steps;