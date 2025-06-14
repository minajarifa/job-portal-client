import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import AllCoffee from "../pages/AllCoffee/AllCoffee";
const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    errorElement:<h1>Route not found</h1>,
     children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/add-coffee",
        element: <AddCoffee/>,
      },
      {
        path: "/all-coffee",
        element: <AllCoffee/>,
      },
    ],
  },
]);
export default router