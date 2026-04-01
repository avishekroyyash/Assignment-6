import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm flex justify-around items-center ">
  <div className=" ">
    
    <a className="btn btn-ghost text-xl text-[#4F39F6] font-bold">DigiTools</a>
  </div>
  <div >
    <ul className="flex justify-center items-center gap-5 font-semibold text-[16px]">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="flex justify-center items-center gap-3">
    <ShoppingCart></ShoppingCart>
    <p className='text-[16px] font-semibold'>Login</p>
    <a className="btn btn-primary rounded-3xl">Get Started</a>
  </div>
</div>
        </div>
    );
};

export default Navber;