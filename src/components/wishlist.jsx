import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const Wishlist = () => {
  // const savedItems = useSelector((store) => store.cart.items);
  const savedItems = useSelector((store) => store.save.savedItems);

  const dispatch= useDispatch()
  const addToCart = (item)=>{
    dispatch(addItem(item))
  }
  console.log("Sav", savedItems);
  if (!savedItems) return <>Loading...</>;
  return (
    <>
      <div>
        <div className="mx-5 text-lime-700 text-xl">YOUR SAVED ITEMS</div>
        {savedItems.map((wish, i) => (
          <>
            <div className="flex m-4">
              <div>
                <img
                  className="object-cover max-w-40 min-2-40 max-h-40"
                  src={wish.thumbnail}
                  alt="wishimg"
                />
              </div>
              <div>
                <div className="flex-row">
                  <div className="font-semibold text-2xl">{wish.title}</div>
                  <div>{wish.description}</div>
                  <div className="font-medium text-xl">
                    <span className="text-black">
                      Rs. {wish.discountPercentage}
                    </span>
                    <span className="line-through text-gray-800 pl-4 text-base">
                      Rs. {wish.price}
                    </span>
                  </div>
                  <div className="bg-green-700 pl-1 w-9 rounded-lg">
                    {wish.rating}
                  </div>
                  <button
            className="bg-blue-500 p-1 mt-2 rounded-lg text-white"
            onClick={() => addToCart(wish)}
          >
            Add To Cart
          </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Wishlist;
