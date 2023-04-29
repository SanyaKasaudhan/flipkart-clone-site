import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";
import ItemCard from "./components/ItemCard";
import ItemCardNavigate from "./components/ItemCardNavigate";
import Navbar from "./components/Navbar";
import Phone from "./components/Phone";
import store from "./utils/store";
import Header from "./components/Header";
import Wishlist from "./components/WishList";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <HomePage />
      </>
    ),
  },
  {
    path: "/cart",
    element: <><Navbar />
    <Cart />
    </>
  },

  {
    path: "/wishlist",
    element: <><Navbar />
    <Wishlist />
    </>,
  },
  {
    path: "/product",
    element: <><Navbar />
    <ItemCard />
    </>,
  },
  {
    path: "/product/:category",
    element: <><Navbar />
    <Phone />
    </>
  },
  {
    path: "/products/:id",
    element:<><Navbar />
    <ItemCardNavigate />
    </>
  },
]);
function App() {
  return (
    <div className="">
      <Provider store={store}>
        <RouterProvider router={appRouter}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
