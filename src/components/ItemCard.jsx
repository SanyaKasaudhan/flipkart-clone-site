import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ALL_PRODUCT_API } from "../constants";
import Phone from "./Phone";
import { useDispatch } from "react-redux";
import { addToWishList } from "../utils/saveSlice";
import {useSelector} from "react-redux"
const ItemCard = () => {
  const [product, setProduct] = useState([]);
  const [wishlist, setWishlist] = useState(false);
  const cartItems = useSelector((store) => store.save.savedItems)
  console.log("wishhh",cartItems)
  const dispatch = useDispatch();
  const saveToWishList = (items) => {
    setWishlist(!wishlist);
    
    dispatch(addToWishList(items));
  };
  useEffect(() => {
    fetch(ALL_PRODUCT_API)
      .then((response) => response.json())
      .then((res) => setProduct(res.products))
      .catch((err) => console.log(err));
  }, []);

  // console.log("pr", product);
  return (
    <>
      <div className="flex flex-row flex-wrap h-80 mt-5 mt-5 h-52 m-3">
        {product.map((e, i) => (<div className="shadow  shadow-amber-600 m-3">
          <Link index={i} to={"/products/" + e.id}>
            <div className="flex flex-col items-center justify-center ">
              <div className="flex items-center justify-between px-5">
                <img
                  className="w-44 max-h-28"
                  alt="product_img"
                  src={e.thumbnail}
                />
                
              </div>
              <div className="mt-8 w-full h-8 font-bold text-center">
                {e.title.split(" ").slice(0, 3).join(" ")}
              </div>
              <div className="w-full h-8 text-green-700 text-lg text-center">
                From Rs. {e.price}
              </div>
              <div className="w-full h-8 text-gray-500 text-center">
                {e.brand}
              </div>
            </div>
          </Link>
          
          {wishlist? <button className="bg-red-500 max-h-10"  onClick={() => saveToWishList(e)}>Wishlist</button>
          :
          <button className="bg-yellow-300 max-h-10"  onClick={() => saveToWishList(e)}>Wishlist</button>
          }
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemCard;
