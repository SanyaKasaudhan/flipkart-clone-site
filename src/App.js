
import './App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import HomePage from './components/HomePage';
import Cart from './components/Cart';
import ItemCard from './components/ItemCard';
import ItemCardNavigate from './components/ItemCardNavigate';
import Navbar from './components/Navbar';


const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <HomePage />
  },
  {
    path:"/cart",
    element: <Cart />
  },
  {
    path: "/product",
    element: <ItemCard />
  },
  {
    path: "/product/:id",
    element: <ItemCardNavigate />
  }
])
function App() {
  return (
    <div className="">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
