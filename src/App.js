
import './App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import HomePage from './components/HomePage';
import Cart from './components/Cart';


const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <HomePage />
  },
  {
    path:"/",
    element: <Cart />
  }
])
function App() {
  return (
    <div className="bg-slate-100">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
