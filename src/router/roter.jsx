import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
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
    ],
  },
]);
export default router