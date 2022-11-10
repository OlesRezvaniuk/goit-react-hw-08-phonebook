import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PublicRoute = ({ children }) => {
  const isLoggin = useSelector(state => state.auth.isLoggedIn);

  if (isLoggin) {
    return <Navigate to="/contacts" />;
  }
  return children;
};
export const PrivateRoute = ({ children }) => {
  const isLoggin = useSelector(state => state.auth.isLoggedIn);

  if (!isLoggin) {
    return <Navigate to="/" />;
  }
  return children;
};
