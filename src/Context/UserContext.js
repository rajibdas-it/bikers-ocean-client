import React, { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthProvider = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const authInfo = { name: "Rajib Das" };
  return (
    <div>
      <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
    </div>
  );
};

export default UserContext;
