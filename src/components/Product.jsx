import React, {useState, useEffect} from 'react'

const Product = () => {
    const url='https://dummyjson.com/products?limit=200';

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((res) => setProduct(res.products))
          .catch((err) => console.log(err));
      }, []);
//smartphones laptops fragrances skincare motorcycle sunglasses automotive lighting 
// womens-bags womens-jewellery 

      console.log("pr",product)
  return (<>
    <div>Product</div>
    {/* {
        product.map(e => <div>{e.category}</div>)
    } */}
    </>
  )
}

export default Product