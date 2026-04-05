import React, { useState } from 'react';
import AddCardShow from './AddCardShow';
import AddEmpty from './AddEmpty';
import { toast } from 'react-toastify';

const AddCard = ({cardData,setcardData}) => {
    const totalPrice = cardData.reduce((sum,item) => sum + item.price,0 );
    const fixTotal = totalPrice.toFixed(2);
     const handleDelet = (id)=>{
    //console.log(deletitem,'clicked remove button')
    const filterData = cardData.filter(item => item.id !== id)
    toast.error('Delete cart')
    setcardData(filterData)
    console.log(filterData) 
   }
    return (
        <div>
            <h1 className='font-bold text-2xl '>Your Cart</h1>
            <div className='md:text-center'>
            {
                cardData.length == 0 ? <AddEmpty></AddEmpty>: 
                cardData.map(item => <AddCardShow key={item.id} item={item} handleDelet={handleDelet}></AddCardShow>)
            
            }
            </div>
            <div className='flex justify-between items-center md:px-30 md:py-5'>
            <p className='text-[#627382]'>Total:</p>
            <p className='font-bold text-2xl'>${fixTotal}</p>
          </div>
           <div className='md:px-32 py-3'>
             <button onClick={()=>{setcardData([]);toast.error('delet all cart')}} className='btn bg-indigo-500 rounded-3xl text-white p-7 w-full '>Proceed to Checkout</button>
           </div>
        </div>
    );
};

export default AddCard;