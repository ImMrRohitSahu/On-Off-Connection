import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { NavLink } from "react-router-dom";
import route from "../routes/route.json"

const AppHeader = () => {
  const { isAuth, contextLogoutHandler } = useContext(AuthContext);
  return (
    <div className="navbar">
      <h3>On-Off-Task</h3>
      <div className="login-signup-btn">
        {!isAuth && (
          <>
            <NavLink className="link" to={route.LOGIN}>
              <button className="login-btn">Login</button>
            </NavLink>
            <NavLink className="link" to={route.SIGNUP}>
              <button className="signup-btn">Signup</button>
            </NavLink>
          </>
        )}
        {isAuth && (
          <button className="logout-btn" onClick={() => contextLogoutHandler()}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default AppHeader;
