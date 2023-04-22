import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { PHONE_API, SINGLE_PRODUCT_API } from "../constants";

const Phone = () => {

  const {category}= useParams();
  console.log("cate",category)
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(SINGLE_PRODUCT_API)
          .then((response) => response.json())
          .then((res) => setProduct(res.products))
          .catch((err) => console.log(err));
      }, []);

console.log("phone",product)
  return <div>
    PHONE
    {
        product.map(e => <div>
           <div className='flex space-x-32'><img className='w-20 h-20' alt="photo" src={e.thumbnail}/>
            <span className='content-end'><img className='w-6 h-6' src="https://cdn-icons-png.flaticon.com/512/25/25424.png" alt="wishlist"/></span></div>
            <div className='font-bold'>{e.title}</div>
            <div className='text-green-700 text-lg'>From Rs. {e.price}</div>
            <div className="text-gray-500">{e.brand}</div>
       
        </div>)
    }
    PHY
  </div>;
};

export default Phone;
