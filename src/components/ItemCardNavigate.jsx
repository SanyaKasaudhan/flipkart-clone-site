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
    <div>
        <div>
            <img src={product.thumbnail} alt="product_img"/>
            <div>{product.title}</div>
            <div>{product.description}</div>
            
            <div>{product.category}</div>
            <div>{product.discountPercentage}</div>
            <div>Rs. {product.price}</div>
            <div>Rating {product.rating}</div>
        </div>
    </div>
  )
}

export default ItemCardNavigate