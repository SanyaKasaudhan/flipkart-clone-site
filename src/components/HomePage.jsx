import React from 'react'

import Categories from './Categories';
import ItemCard from './ItemCard';
import Navbar from './Navbar';
import OfferCarousel from './OfferCarousel';
import Product from './Product';

const HomePage = () => {
  return (
    <div>
    <Navbar />
      <Categories />
      <OfferCarousel />
      <ItemCard />
      <Product />
    </div>
  )
}

export default HomePage