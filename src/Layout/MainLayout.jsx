import { Outlet } from "react-router-dom";
import Navber from "../pages/commonComponents/Navber/Navber";
import Footer from "../pages/commonComponents/Footer/Footer";

export default function MainLayout() {
  return (
    <div className="mx-20">
      <Navber/>
        <Outlet/>
        <Footer/>
    </div>
  )
}