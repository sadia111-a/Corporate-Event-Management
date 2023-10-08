import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  console.log(loading);
  if (loading) return <h1 className="text-5xl">Loading</h1>;
  if (!user?.email) {
    return <Navigate to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRoute;
