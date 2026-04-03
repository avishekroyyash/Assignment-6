import React, { use } from 'react';
import ProductCartShow from './ProductCartShow';

const ProductCart = ({product,cardData,setcardData}) => {
    const productData = use(product)
    //console.log(productData,'productData')
    return (
        <div className='grid grid-cols-3 p-10 gap-3 ml-20'>
             {
                productData.map(item => <ProductCartShow key={item.id} item={item} cardData={cardData} setcardData={setcardData} ></ProductCartShow> )
             }
        </div>
    );
};

export default ProductCart;