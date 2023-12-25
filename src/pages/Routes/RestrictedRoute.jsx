import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

export const RestrictedRoute = ({
  component: Component,
  redirectTo = '/main',
}) => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? (
    <Navigate to={location.state?.from || redirectTo} />
  ) : (
    Component
  );
};
