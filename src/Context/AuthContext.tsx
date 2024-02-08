import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem('authTokens')
      ? JSON.parse(localStorage.getItem('authTokens'))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem('authTokens')
      ? jwtDecode(localStorage.getItem('authTokens'))
      : null
  );
  const [loading, setLoading] = useState(true);

  const history = useNavigate();

  let loginUser = async (e) => {
    console.log('test')
    e.preventDefault();
    const response = await fetch('https://dunison-service.onrender.com/auth/customer/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });
    const data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem('authTokens', JSON.stringify(data));
      history.push('/');
    } else {
      alert('Something went wrong!');
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem('authTokens');
    history.push('/login');
  };

  const contextData = {
    user,
    authTokens,
    loginUser,
    logoutUser,
  };

  useEffect(() => {
    if (loading) {
      // Update user and access token without using refresh token logic
      const storedTokens = localStorage.getItem('authTokens');
      if (storedTokens) {
        const parsedTokens = JSON.parse(storedTokens);
        setAuthTokens(parsedTokens);
        setUser(jwtDecode(parsedTokens.access));
      }
      setLoading(false);
    }
  }, [loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
