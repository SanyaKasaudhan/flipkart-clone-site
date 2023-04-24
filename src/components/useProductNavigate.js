import React, { useEffect, useState } from "react";
import { SINGLE_PRODUCT_API } from "../constants";

const useProductNavigate = (id) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await fetch(SINGLE_PRODUCT_API + id);
    const json = await data.json().then((json) => setProduct(json));
  }
  return product;
};

export default useProductNavigate;
