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
import Payment from "../../Pages/DashboardPages/Payment/Payment";
import AdminRoute from "../AdminRoute/AdminRoute";

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
          fetch(`https://bikers-ocean-server.vercel.app/category/${params.id}`),
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
    errorElement: <ErrorPage></ErrorPage>,
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/create-category",
        element: (
          <AdminRoute>
            <CreateCategory></CreateCategory>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/view-all-category",
        element: (
          <AdminRoute>
            <ViewCategory></ViewCategory>
          </AdminRoute>
        ),
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
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-sellers",
        element: (
          <AdminRoute>
            <ManageSeller></ManageSeller>
          </AdminRoute>
        ),
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
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`https://bikers-ocean-server.vercel.app/bookings/${params.id}`),
      },
    ],
  },
]);
