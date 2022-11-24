import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import CreateCategory from "../../Pages/DashboardPages/CreateCategory/CreateCategory";
import Dashboard from "../../Pages/DashboardPages/Dashboard/Dashboard";
import ViewCategory from "../../Pages/DashboardPages/ViewCategory/ViewCategory";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <Register></Register> },
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
    ],
  },
]);
