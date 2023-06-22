import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute() {
  const authContext = useAuth();
  console.log(authContext.loading);

  if(authContext.loading) return <h1>Loading..</h1>
  if(!authContext.loading && !authContext.isAuthenticated) return <Navigate to="/login" replace/>

  return <Outlet/>;
}

export default ProtectedRoute;