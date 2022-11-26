import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";

const DashboardLayout = () => {
  const menuItem = (
    <>
      <li>
        <Link to="/dashboard/create-category">Create Category</Link>
      </li>

      <li>
        <Link to="/dashboard/view-all-category">Manage Category</Link>
      </li>
      <li>
        <Link to="/dashboard/add-new-product">Add Product</Link>
      </li>
      <li>
        <Link to="/dashboard/view-all-product">Manage Product</Link>
      </li>
      <li>
        <Link to="/dashboard/">All Buyer</Link>
      </li>
      <li>
        <Link to="/dashboard/">All Seller</Link>
      </li>
      <li>
        <Link to="/dashboard/">Reported Items</Link>
      </li>
      <li>
        <Link to="/dashboard/">My Orders</Link>
      </li>
      <li>
        <Link to="/dashboard/">My Wishlist</Link>
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
