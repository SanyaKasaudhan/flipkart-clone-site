
import './App.css';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Categories />
      <Product />
    </div>
  );
}

export default App;
