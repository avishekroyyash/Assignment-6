import React from 'react';
import AddCardShow from './AddCardShow';
import AddEmpty from './AddEmpty';

const AddCard = ({cardData,setcardData}) => {
    return (
        <div>
            <h1 className='font-bold text-2xl '>Your Cart</h1>
            <div className='text-center'>
            {
                cardData.length == 0 ? <AddEmpty></AddEmpty>: 
                cardData.map(item => <AddCardShow key={item.id} item={item}></AddCardShow>)
            
            }
            </div>
            <div className='flex justify-between items-center px-30 py-5'>
            <p className='text-[#627382]'>Total:</p>
            <p className='font-bold text-2xl'>$23</p>
          </div>
           <div className='px-32 py-3'>
             <button className='btn bg-indigo-500 rounded-3xl text-white p-7 w-full '>Proceed to Checkout</button>
           </div>
        </div>
    );
};

export default AddCard;