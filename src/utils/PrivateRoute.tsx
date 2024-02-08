// PrivateRoute.jsx
import React, {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  return user ? children : <Navigate to="/user/login" />;
};

export default PrivateRoute;
