import React from "react";
import beauty from "../assets/beauty.jpg";
import clothing from "../assets/clothing.jpg";
import electronics from "../assets/electronics.jpg";
import mobile from "../assets/mobile.jpg";
import offer from "../assets/offer.jpg";
import tv from "../assets/tv.jpg";
import furniture from "../assets/furniture.jpg";
import grocery from "../assets/grocery.jpg";

const Categories = () => {
  const cateogryImg = [    
    offer,
    beauty,
    clothing,
    electronics,
    mobile,
    tv,
    furniture,
    grocery,
  ];
  const cateogryTitle = [    
    "Offer",
    "Beauty",
    "Clothing",
    "Electronics",
    "Mobile",
    "Tv",
    "Furniture",
    "Grocery",
  ];

  return (
    <div className="border-b-gray-500 h-32 shadow-lg">
      <div className="ml-28 flex flex-row">
        {cateogryImg.map((e) => (
          <img
            alt="offers"
            className="mt-2 min-w-20 max-w-20 ml-10 h-20 rounded-full shadow-md"
            src={e}
          />
        ))}
      </div>
      <div className="ml-24 flex flex-row">
        {cateogryTitle.map((e) => (
          <div className="mt-2 ml-[90px] text-md font-semibold">{e}</div>
        ))}
      </div>

      <div></div>
      <div></div>
    </div>
  );
};

export default Categories;
