import { useAuth } from "../context/auth.context.jsx";
import { Navigate, Outlet } from "react-router-dom";
function ProtectedRoute() {
  const { isAuthenticated } = useAuth();
  //si el usuario no esta login lo regresa al inicio
  console.log("protect",isAuthenticated)
  if (!isAuthenticated) return <Navigate to="/" replace></Navigate>;
  return <Outlet />;
}
export default ProtectedRoute;
