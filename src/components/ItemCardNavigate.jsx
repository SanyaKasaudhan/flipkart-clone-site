import React from 'react'
import { useParams } from 'react-router-dom';
import useProductNavigate from './useProductNavigate';

const ItemCardNavigate = () => {
    const { id } = useParams();
    console.log("id",id)

    const product = useProductNavigate(id);
    console.log("prod",product)
    if(!product)
        return <>Loading.....</>
  return (
    <div className=''>        
        
        <div className='pl-[445px] pt-20 text-4xl font-bold'>{product.brand}  {product.category.toUpperCase()}</div>
        <div className='relative flex ml-40 mr-52 mt-2'>
        <div className='flex-col h-10 w-20 mr-5'>{product.images.map((e) => <img className='border-2 border-gray-950 m-2' src={e} alt="imgthumbnail"/> )                
            }</div>
            <div className=' flex-row'>
            
            <img className='shadow-2xl' src={product.thumbnail} alt="product_img"/>
            </div>
            <div className='pl-5 space-y-3'>
            <div className='text-3xl text-amber-600 font-semibold'>{product.title}</div>
            <div className='text-md text-black font-medium'>{product.description}</div>
            
            <div className='text-green-500 font-medium text-xl'>Price <span className='text-black'>Rs. {product.discountPercentage}</span>
             <span className='line-through text-gray-500 pl-4 text-base'>Rs. {product.price}</span></div>
            <div></div>
            <div >Rating <span className='w-16 h-14 p-1 text-white bg-green-500 rounded-lg'>{product.rating}</span> </div>
            <div className='text-lg text-red-600 font-medium'>Hurry only {product.stock} left</div>
            
            </div>
        </div>
    </div>
  )
}

export default ItemCardNavigate