import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import useSeller from "../../Hooks/useSeller";
import Loader from "../../Pages/Shared/Loader/Loader";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();
  if (loading || isSellerLoading) {
    return <Loader></Loader>;
  }

  if (user && isSeller) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
