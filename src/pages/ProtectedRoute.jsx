import { Navigate } from "react-router-dom";
import useMovies from "../hooks/use-movies";

const ProtectedRoute = ({ children }) => {
  const { user } = useMovies();

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
