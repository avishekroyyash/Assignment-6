import React from 'react';
import BannerPic from '../../Asset/banner.png'
import { Circle, Triangle } from 'lucide-react';

const Banner = () => {
    return (
        <div>
            <div className="md:flex justify-center items-center md:p-30 p-2 gap-10 bg-base-200 min-h-screen">
 
    <div className='md:space-y-3'>
      <p className='text-indigo-500 bg-indigo-200 rounded-3xl w-[300px] p-1 flex gap-1'><Circle></Circle>New: AI-Powered Tools Available</p>
      <h1 className=" text-2xl md:text-5xl font-bold md:leading-13 ">Supercharge Your<br></br>Digital Workflow</h1>
      <p className="md:py-6 text-[#627382]">
        Access premium AI tools, design assets, templates, and productivity 
        <br></br>software—all in one place. Start creating faster today.<br></br> Explore Products
      </p>
      <span className='flex gap-3'>
        <button className="btn btn-primary rounded-3xl">Explore Products</button>
       <button className="btn rounded-3xl border-indigo-500 text-indigo-500"><span className='text-indigo-500 text-2xl '><Triangle></Triangle></span>Watch Demo</button>
      </span>
    </div>
  
      <div className="">
    <img
      src={BannerPic}
      className="md:max-w-sm rounded-lg shadow-2xl"
    />
    </div>
</div>
        </div>
    );
};

export default Banner;