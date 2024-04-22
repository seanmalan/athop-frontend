import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
  const authenticated = false;

  console.log("private route works");
  return (
    <Route {...rest}>
      {!authenticated ? <Navigate to='/login' replace /> : children}
    </Route>
  );
};

export default PrivateRoute;
