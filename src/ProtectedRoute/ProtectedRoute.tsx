// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
