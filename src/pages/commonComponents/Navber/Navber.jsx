import { Link } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";

export default function () {
  const navBer = (
    <>
      <Link className="m-2" to="/">
        Home
      </Link>
      <Link className="m-2" to="/add-coffee">
        Add coffee
      </Link>
      <Link className="m-2" to="/all-coffee">
        All coffee
      </Link>

      <Link className="m-2" to="/all-users">
        All Users
      </Link>
    </>
  );
  return (
    <div>
      <div className="shadow-sm navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <RiMenu2Line className="w-5 h-5" />
            </div>
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
            >
              {navBer}
            </ul>
          </div>
          <a className="text-xl btn btn-ghost">Coffee House</a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">{navBer}</ul>
        </div>
        <div className="navbar-end">
          {/*  */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://i.ibb.co/mrK7Sjcw/download.png"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
            >
              {/* register , login */}
              <Link className="m-2" to="/register">
                Register
              </Link>
              <Link className="m-2" to="/login">
                Login
              </Link>
            </ul>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}
