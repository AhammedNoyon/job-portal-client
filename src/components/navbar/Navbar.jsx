import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { ImMenu } from "react-icons/im";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const menu = (
    <>
      <li>
        <NavLink>HOme</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar p-0 bg-base-100 w-11/12 md:w-5/6 mx-auto">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
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
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
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
