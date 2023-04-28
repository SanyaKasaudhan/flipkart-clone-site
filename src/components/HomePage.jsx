import React from 'react'

import Categories from './Categories';
import ItemCard from './ItemCard';
import Navbar from './Navbar';
import OfferCarousel from './OfferCarousel';

const HomePage = () => {
  return (
    <div>      
      <Categories />
      <OfferCarousel />
      <ItemCard />
      
    </div>
  )
}

export default HomePage