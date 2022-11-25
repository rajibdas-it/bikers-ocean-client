import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";

const DashboardLayout = () => {
  const menuItem = (
    <>
      <li>
        <Link to="/dashboard/create-category">Create New Category</Link>
      </li>

      <li>
        <Link to="/dashboard/view-all-category">View All Category</Link>
      </li>
      <li>
        <Link to="/dashboard/add-new-product">Add New Product</Link>
      </li>
      <li>
        <Link to="/dashboard/view-all-product">View All Product</Link>
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
