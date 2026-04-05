import React, { use } from 'react';
import ProductCartShow from './ProductCartShow';

const ProductCart = ({product,cardData,setcardData}) => {
    const productData = use(product)
    //console.log(productData,'productData')
    return (
        <div className='grid grid-col-1 md:grid-cols-3 md:p-10 gap-3 md:ml-20'>
             {
                productData.map(item => <ProductCartShow key={item.id} item={item} cardData={cardData} setcardData={setcardData} ></ProductCartShow> )
             }
        </div>
    );
};

export default ProductCart;