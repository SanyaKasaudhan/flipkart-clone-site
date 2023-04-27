import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { clearCart } from '../utils/cartSlice';
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch= useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
console.log("cartItems",cartItems)
  return (
    <div>
      <div>
        YOUR ADDED ITEMS ARE HERE
      </div>
      <div>
      <div>
      <h1 className="font-bold text-3xl"> Cart Items - {cartItems.length}</h1>
      <button
        className="bg-green-100 p-2 m-5"
         onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex">
        
      <div className='flex-row'>
        {cartItems.map((item) => (
          <div className='flex'>
          <div className="flex-row w-96 p-2 m-2 shadow-lg bg-pink-50 ">
          <img alt="productImg" src={item.thumbnail} />
          <h2 className="font-bold text-xl">{item.title}</h2>
          <h3>{item.discountPercentage}</h3>
          <div>{item.rating}</div>
          <h4>Rupees: {item.price}</h4>
        </div>
        </div>
        ))}        
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Cart