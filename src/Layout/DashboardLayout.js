import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import useAdmin from "../Hooks/useAdmin";
import useSeller from "../Hooks/useSeller";
import Header from "../Pages/Shared/Header/Header";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);

  const menuItem = (
    <>
      {isAdmin && (
        <>
          <li>
            <Link to="/dashboard/create-category">Create Category</Link>
          </li>

          <li>
            <Link to="/dashboard/view-all-category">Manage Category</Link>
          </li>
          <li>
            <Link to="/dashboard/manage-users">Manage Users</Link>
          </li>
          <li>
            <Link to="/dashboard/manage-sellers">Manage Seller</Link>
          </li>
          <li>
            <Link to="/dashboard/reported-products">Reported Items</Link>
          </li>
        </>
      )}
      {isAdmin ||
        (isSeller && (
          <>
            <li>
              <Link to="/dashboard/add-new-product">Add Product</Link>
            </li>
            <li>
              <Link to="/dashboard/view-all-product">Manage Product</Link>
            </li>
          </>
        ))}

      {!isAdmin && !isSeller && (
        <li>
          <Link to="/dashboard/myorders">My Orders</Link>
        </li>
      )}
      {/* <li>
        <Link to="/dashboard/mywishlist">My Wishlist</Link>
      </li> */}
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

          <ul className="menu p-4 w-70 text-base-content">
            {/* <h1>raib</h1> */}
            {menuItem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
