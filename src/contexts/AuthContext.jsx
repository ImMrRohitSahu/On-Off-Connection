import { createContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  const [isAuth, setISAuth] = useState(false);

  const contextLoginHandler = () => {
    setISAuth(true);
  };
  const contextLogoutHandler = () => {
    setISAuth(false);
  };
  return (
    <AuthContext.Provider
      value={{ isAuth, contextLoginHandler, contextLogoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
