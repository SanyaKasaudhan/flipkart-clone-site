import React, { useState, useEffect } from "react";
import beauty from "../assets/beauty.jpg";
import fragrances from "../assets/fragrances.jpg";
import electronics from "../assets/electronics.jpg";
import mobile from "../assets/mobile.jpg";
import offer from "../assets/offer.jpg";
import tv from "../assets/tv.jpg";
import furniture from "../assets/furniture.jpg";
import grocery from "../assets/grocery.jpg";
import { Link, useParams } from "react-router-dom";
import { ALL_PRODUCT_API } from "../constants";

const Categories = () => {
  // const { cat } = useParams();
  const cateogryImg = [mobile, tv, fragrances, beauty, grocery, furniture];

  // const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        const uniqueCategories = data.products.reduce((acc, product) => {
          if (!acc.includes(product.category)) {
            return [...acc, product.category];
          }
          return acc;
        }, []);
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="border-b-gray-500 h-32 shadow-lg">
      <div className="ml-28 flex flex-row">
        {cateogryImg.map((e, i) => (
          <img
            alt="offers"
            className="mt-2 min-w-20 max-w-20 ml-16 h-20 rounded-full shadow-md"
            src={e}
          />
        ))}
      </div>
      <div className="ml-28 flex flex-row">
        {categories ? (
          <>
            {categories.map((e) => (
              <Link index={e} to={"/product/" + e}>
                <div className="mt-2 ml-[90px] text-md font-semibold">{e}</div>
              </Link>
            ))}
          </>
        ) : (
          "LOading"
        )}
      </div>

      <div></div>
    </div>
  );
};

export default Categories;
