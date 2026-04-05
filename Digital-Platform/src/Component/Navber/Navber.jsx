import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Navber = ({cardData}) => {
    return (
        <div>
            <div className="md:navbar bg-base-100 shadow-sm flex md:justify-around items-center gap-15">
  <div>
    
    <a className="btn btn-ghost text-xl text-[#4F39F6] font-bold">DigiTools</a>
  </div>
  <div >
    <ul className=" hidden md:flex justify-center items-center gap-5 font-semibold text-[16px]">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="flex justify-center items-center gap-3 relative">
    <p className='bg-red-500 absolute -top-3 left-4 rounded-full px-2 text-white'>{cardData.length}</p>
    <ShoppingCart></ShoppingCart>
    <p className='hidden md:text-[16px] font-semibold'>Login</p>
    <a className="hidden btn md:btn-primary rounded-3xl">Get Started</a>
  </div>
</div>
        </div>
    );
};

export default Navber;