import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { users, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
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
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign out successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="navbar p-0  w-11/12 md:w-3/4 mx-auto">
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
        {users ? (
          <div onClick={handleSignOut}>
            <Link className=" px-4 py-2 border-2 text-primaryColor border-primaryColor">
              Logout
            </Link>
          </div>
        ) : (
          <div>
            <Link
              to="/register"
              className=" mr-5 underline decoration-primaryColor underline-offset-4 text-primaryColor"
            >
              register
            </Link>
            <Link
              to="/login"
              className=" px-4 py-2 border-2 text-primaryColor border-primaryColor"
            >
              Login
            </Link>
          </div>
        )}
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
