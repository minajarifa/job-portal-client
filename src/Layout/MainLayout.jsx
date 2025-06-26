import { Outlet } from "react-router-dom";
import Navber from "../pages/commonComponents/Navber/Navber";
import Footer from "../pages/commonComponents/Footer/Footer";

export default function MainLayout() {
  return (
    <div className="mx-20">
      <div className="">
        <div className="fixed top-0 left-0 right-0 z-50 shadow-sm mx-14">
          <Navber/>
        </div>
        <div className="pt-16 ">
          <Outlet/>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
