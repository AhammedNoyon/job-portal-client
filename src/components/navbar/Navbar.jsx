import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  const menu = (
    <>
      <li>
        <NavLink to="/">HOme</NavLink>
      </li>
      <li>
        <NavLink to="/findJob">Find Job</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar p-0 bg-base-100 w-11/12 md:w-5/6 mx-auto">
      <div className="navbar-start">
        <Link className=" btn-ghost text-xl">
          <div className="flex items-center gap-1">
            <img className="hidden md:block" src={logo} alt="" />
            <h3 className="text-2xl md:text-3xl font-bold">JOb Portal</h3>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal gap-x-5">{menu}</ul>
      </div>
      <div className="navbar-end">
        <div>
          <Link
            to="/register"
            className=" mr-5 underline decoration-primaryColor underline-offset-4 text-primaryColor"
          >
            register
          </Link>
          <Link
            to="/login"
            className="btn border-2 text-primaryColor border-primaryColor"
          >
            Login
          </Link>
        </div>
        <div className="dropdown ml-4 lg:hidden">
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="drawer-button text-3xl font-bold"
              >
                <HiOutlineMenuAlt2 />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="bg-base-200 text-base-content min-h-full w-80 p-4">
                {/* Sidebar content here */}
                {menu}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
