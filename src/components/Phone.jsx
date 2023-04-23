import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { CATEGORY_API, PHONE_API, SINGLE_PRODUCT_API } from "../constants";

const Phone = () => {

  const {category}= useParams();
  console.log("cate",category)
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(CATEGORY_API+category)
          .then((response) => response.json())
          .then((res) => setProduct(res.products))
          .catch((err) => console.log(err));
      }, []);

console.log("phone",product)
  return <div>
    {
         <div className='flex flex-row flex-wrap'>
   
         {
             product.map((e,i) =>( 
             <div className='shadow-lg w-60 h-40 mx-10 my-5 justify-center'>
                 <div className='flex space-x-32'><img className='w-20 h-20' alt="photo" src={e.thumbnail}/></div>
                 <div className='font-bold'>{e.title}</div>
                 <div className='text-green-700 text-lg'>From Rs. {e.price}</div>
                 <div className="text-gray-500">{e.brand}</div>
             </div>
           ))
         }
         </div>
    }
    
  </div>;
};

export default Phone;
