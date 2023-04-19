import React, {useState, useEffect} from 'react'

const ItemCard = () => {
    const url='https://dummyjson.com/products?limit=200';

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((res) => setProduct(res.products))
          .catch((err) => console.log(err));
      }, []);

      console.log("pr",product)
  return (<>
    <div className='flex flex-row flex-wrap'>
    {
        product.map((e) =>( <div className='shadow-lg w-60 h-40 mx-10 my-5 justify-center'>
            <div className='flex space-x-32'><img className='w-20 h-20' alt="photo" src={e.thumbnail}/>
            <span className='content-end'><img className='w-6 h-6' src="https://cdn-icons-png.flaticon.com/512/25/25424.png" alt="wishlist"/></span></div>
            <div className='font-bold'>{e.title}</div>
            <div className='text-green-700 text-lg'>From Rs. {e.price}</div>
            <div className="text-gray-500">{e.brand}</div>
        </div>))
    }
    </div>
    </>
  )
  
}

export default ItemCard