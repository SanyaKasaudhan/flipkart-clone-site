import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ALL_PRODUCT_API } from "../constants";
import Phone from "./Phone";
import { useDispatch } from "react-redux";
import { addToWishList } from "../utils/saveSlice";
import { useSelector } from "react-redux";

const ItemCard = () => {
  const [product, setProduct] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const cartItems = useSelector((store) => store.save.savedItems);
  console.log("wishhh", cartItems);
  const dispatch = useDispatch();

  const saveToWishList = (item) => {
    if (wishlist.includes(item.id)) {
      setWishlist(wishlist.filter((productId) => productId !== item.id));
    } else {
      setWishlist([...wishlist, item.id]);
    }

    dispatch(addToWishList(item));
  };

  useEffect(() => {
    fetch(ALL_PRODUCT_API)
      .then((response) => response.json())
      .then((res) => setProduct(res.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="flex flex-row flex-wrap h-60 mt-5 mb-15 m-3">
        {product.map((e, i) => (
          <div className="shadow  shadow-amber-600 m-3 flex flex-col w-72 h-80 mx-auto">
            <Link index={i} to={"/products/" + e.id}>
              <div className="flex flex-col items-center justify-center h-4/5">
                <div className="flex items-center justify-between px-5 w-full">
                  <img
                    className="w-60 max-h-28 mt-5"
                    alt="product_img"
                    src={e.thumbnail}
                  />
                </div>
                <div className="mt-8 w-full h-8 font-bold text-center">
                  {e.title.split(" ").slice(0, 2).join(" ")}
                </div>
                <div className="w-full h-8 text-green-700 text-lg text-center">
                  From Rs. {e.price}
                </div>
                <div className="w-full h-8 text-gray-500 text-center">
                  {e.brand}
                </div>
              </div>
            </Link>
            <div className="flex justify-center h-1/5">
            <button
              className={`max-h-10 px-2 rounded-lg mb-2 ${
                wishlist.includes(e.id) ? "bg-red-500" : "bg-yellow-300"
              }`}
              onClick={() => saveToWishList(e)}
            >
              Wishlist
            </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemCard;