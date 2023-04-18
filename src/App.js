
import './App.css';
import Categories from './components/Categories';
import ItemCard from './components/ItemCard';
import Navbar from './components/Navbar';
import OfferCarousel from './components/OfferCarousel';
import Product from './components/Product';

function App() {
  return (
    <div className="bg-slate-100">
      <Navbar />
      <Categories />
      <OfferCarousel />
      <ItemCard />
      <Product />
    </div>
  );
}

export default App;
