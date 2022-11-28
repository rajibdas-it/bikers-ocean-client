import React, { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";
import useTitle from "../../../Hooks/useTitle";

const Dashboard = () => {
  useTitle("Dashboard");
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1 className="text-xl font-bold">
        Welcome To Your Dashboard, {user.displayName}
      </h1>
    </div>
  );
};

export default Dashboard;
