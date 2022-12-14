import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/bo_logo.png";
import { AuthContext } from "../../../Context/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch(() => {});
  };
  const menuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/blogs">Blogs</Link>
      </li>

      {user?.email && (
        <>
          <li>
            <Link to="/mywishlist">Wish List</Link>
          </li>
          {/* <li>
            <Link to="/myorders">My Orders</Link>
          </li> */}

          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>

          <li>
            <p>Welcome, {user?.displayName}</p>
          </li>
        </>
      )}

      {!user?.email ? (
        <li>
          <Link to="/login">Login</Link>
        </li>
      ) : (
        <li>
          <button onClick={handleLogOut}>Logout</button>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start lg:navbar-center">
        <div className="dropdown">
          <label tabIndex={1} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={2}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" className="w-12 h-12" />
          <p className="font-bold text-3xl">
            Bikers <span className="text-primary">Ocean</span>
          </p>
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
      <label
        htmlFor="bikers-ocean-dashboard-drawer"
        tabIndex={2}
        className="btn btn-ghost ml-32 md:ml-80 lg:hidden "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-6 h-6 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
    </div>
  );
};

export default Header;
