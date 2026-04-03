import React, { useState } from 'react';

const ProductCartShow = ({item,cardData,setcardData}) => {
    //console.log(item.features)
    const[isSubscribed,setisSubscribed] = useState(false)
    const handleSubscription = ()=>{
     setisSubscribed(true)
     setcardData([...cardData,item])
    }
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-sm justify-center items-center  ">
  <div className="card-body  justify-center ">
    
      <div className={`${ item.tag === 'new' && 'text-green-500 bg-green-200'} ${ item.tag === 'popular' && 'text-indigo-500 bg-indigo-200' } ${ item.tag === 'best seller' && 'text-orange-500 bg-orange-200'} rounded-2xl px-5 w-[110px] ml-60 flex items-center justify-center`}>{item.tag}</div>  
    
    
    <img className='h-[30px] w-[30px]' src={item.icon} alt="this is pic" />
    <div className="space-y-3">
    <h2 className="text-3xl font-bold">{item.name}</h2>
      <p className='text-[#627382]'>{item.description}</p>
      <h1><span className='font-bold text-2xl'>${item.price}</span>/mo</h1>
    </div>
    {
        item.features.map((feature,index)=>  { 
            return(
              <ul key={index} className="mt-1 flex flex-col gap-1 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{feature} </span>
      </li>
    </ul>
            )
        })
    }
  
    <div className="mt-6">
      <button onClick={handleSubscription} className={`${isSubscribed ? ' bg-green-500': 'btn-primary'} btn  btn-block rounded-2xl`}>{isSubscribed ? 'Add to cart': 'Buy Now'}</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductCartShow;