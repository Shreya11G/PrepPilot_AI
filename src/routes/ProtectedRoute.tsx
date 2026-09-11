import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute() {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  console.log("ProtectedRoute:", {
    user,
    isAuthenticated,
  });

  if (!isAuthenticated) {
    console.log("ProtectedRoute: Redirecting to login");

    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  console.log("ProtectedRoute: Access granted");

  return <Outlet />;
}

export default ProtectedRoute;