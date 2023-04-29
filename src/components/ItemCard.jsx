import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ALL_PRODUCT_API } from "../constants";
import Phone from "./Phone";
import {useDispatch} from "react-redux"
const ItemCard = () => {
  const [product, setProduct] = useState([]);

  const dispatch = useDispatch();
  const saveToWishList =() =>{

  }
  useEffect(() => {
    fetch(ALL_PRODUCT_API)
      .then((response) => response.json())
      .then((res) => setProduct(res.products))
      .catch((err) => console.log(err));
  }, []);

  console.log("pr", product);
  return (
    <>
      <div className="flex flex-row flex-wrap mt-5">
        {product.map((e, i) => (
          <Link index={i} to={"/products/" + e.id}>
            <div className="flex flex-col items-center justify-center shadow-lg shadow-red-500/40 w-72 h-52 mx-10 my-10">
              <div className="flex items-center justify-between w-full h-20 px-5">
                <img
                  className="w-44 h-32"
                  alt="product_img"
                  src={e.thumbnail}
                />
                <img
                  className="w-8 h-8"
                  src="https://cdn-icons-png.flaticon.com/512/25/25424.png"
                  alt="wishlist" onClick={()=> saveToWishList()}
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
        ))}
      </div>
    </>
  );
};

export default ItemCard;
