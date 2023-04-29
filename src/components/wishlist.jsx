import React from 'react'
import {useSelector} from "react-redux"
const Wishlist = () => {
    const savedItems = useSelector((store) => store.cart.items);
    //  const cartItems = useSelector((store) => store.save)

    //  console.log("cartItems",cartItems,"Sav",savedItems)
  return (
    <div>wishlist</div>
  )
}

export default Wishlist