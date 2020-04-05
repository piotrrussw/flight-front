import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import authManager from 'api/authManager';

const initialAuth = {
  authenticated: true,
  user: null,
};

const AuthContext = createContext(null);

const AuthProvider = (props) => {
  const [auth, setAuth] = useState(initialAuth);

  useEffect(() => {
    const authData = authManager.getAuthData();

    if (authData) {
      setAuth(authData);
    }
  }, []);

  const onLogout = () => setAuth(initialAuth);
  const onLogin = (newAuth) => setAuth(newAuth);

  const authValue = useMemo(() => ({ ...auth, onLogin, onLogout }), [auth]);

  return <AuthContext.Provider value={authValue} {...props} />;
};

export { AuthContext };
export default AuthProvider;
