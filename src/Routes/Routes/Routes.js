import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import AddNewProduct from "../../Pages/DashboardPages/AddNewProduct/AddNewProduct";
import CreateCategory from "../../Pages/DashboardPages/CreateCategory/CreateCategory";
import Dashboard from "../../Pages/DashboardPages/Dashboard/Dashboard";
import ViewAllProducts from "../../Pages/DashboardPages/ViewAllProducts/ViewAllProducts";
import ViewCategory from "../../Pages/DashboardPages/ViewCategory/ViewCategory";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyOrders from "../../Pages/DashboardPages/MyOrders/MyOrders";
import Products from "../../Pages/Products/Products";
import Register from "../../Pages/Register/Register";
import WishList from "../../Pages/WishList/WishList";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ManageUsers from "../../Pages/DashboardPages/ManageUsers/ManageUsers";
import ManageSeller from "../../Pages/DashboardPages/ManageSeller/ManageSeller";
import ReportedProducts from "../../Pages/DashboardPages/ReportedProducts/ReportedProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/blogs", element: <Blogs></Blogs> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <Register></Register> },
      // { path: "/category/:id", element: <Pro },

      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
        element: (
          <PrivateRoute>
            <Products></Products>
          </PrivateRoute>
        ),
      },
      {
        path: "/mywishlist",
        element: (
          <PrivateRoute>
            <WishList></WishList>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      { path: "/dashboard", element: <Dashboard></Dashboard> },
      {
        path: "/dashboard/create-category",
        element: <CreateCategory></CreateCategory>,
      },
      {
        path: "/dashboard/view-all-category",
        element: <ViewCategory></ViewCategory>,
      },
      {
        path: "/dashboard/add-new-product",
        element: <AddNewProduct></AddNewProduct>,
      },
      {
        path: "/dashboard/view-all-product",
        element: <ViewAllProducts></ViewAllProducts>,
      },
      {
        path: "/dashboard/manage-users",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "/dashboard/manage-sellers",
        element: <ManageSeller></ManageSeller>,
      },
      {
        path: "/dashboard/reported-products",
        element: <ReportedProducts></ReportedProducts>,
      },
      {
        path: "/dashboard/myorders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
