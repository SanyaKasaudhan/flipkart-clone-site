import React from 'react'
import { useParams } from 'react-router-dom';
import useProductNavigate from './useProductNavigate';

const ItemCardNavigate = () => {
    const { id } = useParams();
    console.log("id",id)

    const product = useProductNavigate(id);
    console.log("prod",product)
  return (
    <div>
        <div>
            <img src={product.thumbnail} alt="image"/>
            <div>{product.title}</div>
            <div>{product.description}</div>
        </div>
    </div>
  )
}

export default ItemCardNavigate