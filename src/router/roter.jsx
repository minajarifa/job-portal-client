import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import AllCoffee from "../pages/AllCoffee/AllCoffee";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AllUsers from "../pages/AllUsers/AllUsers";
import UpdateUser from "../pages/AllUsers/UpdateUser/UpdateUser";

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
      
      {
        path: "/update-coffee/:id",
        element: <UpdateCoffee/>,
      },
      {
        path: "/all-users",
        element: <AllUsers/>,
      },
      {
        path: "/update-users/:id",
        element: <UpdateUser/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
    ],
  },
]);
export default router