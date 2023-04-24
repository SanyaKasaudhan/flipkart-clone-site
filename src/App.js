import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";
import ItemCard from "./components/ItemCard";
import ItemCardNavigate from "./components/ItemCardNavigate";
import Navbar from "./components/Navbar";
import Phone from "./components/Phone";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/product",
    element: <ItemCard />,
  },
  {
    path: "/product/:category",
    element: <Phone />,
  },
  {
    path: "/products/:id",
    element: <ItemCardNavigate />,
  },
]);
function App() {
  return (
    <div className="">
      <RouterProvider router={appRouter}>
        <Navbar />
      </RouterProvider>
    </div>
  );
}

export default App;
