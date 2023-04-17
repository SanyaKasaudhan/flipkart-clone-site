
import './App.css';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import OfferCarousel from './components/OfferCarousel';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Categories />
      <OfferCarousel />
      <Product />
    </div>
  );
}

export default App;
