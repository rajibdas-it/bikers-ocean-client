import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import CreateCategory from "../../Pages/DashboardPages/CreateCategory/CreateCategory";
import Dashboard from "../../Pages/DashboardPages/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/create-category", element: <></> },
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
    ],
  },
]);
