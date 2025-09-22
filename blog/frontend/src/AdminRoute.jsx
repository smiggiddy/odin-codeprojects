import { Fragment, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("jwt_token");
  const header = { Authorization: `Bearer ${token}` };
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <AuthContext.Provider value={{ token, header }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AdminRoute;
