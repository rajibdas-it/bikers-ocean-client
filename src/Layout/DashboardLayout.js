import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";

const DashboardLayout = () => {
  const menuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">My Orders</Link>
      </li>

      <li>
        <Link to="/">Contact Us</Link>
      </li>

      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>

      <li>
        <Link to="/">Login</Link>
      </li>

      <li>
        <Link to="/">Logout</Link>
      </li>
    </>
  );
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input
          id="bikers-ocean-dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="bikers-ocean-dashboard-drawer"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {menuItem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
