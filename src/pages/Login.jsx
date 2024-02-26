import { Link, useNavigate } from "react-router-dom";
import route from "../routes/route.json";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { contextLoginHandler } = useContext(AuthContext);
  const navigate = useNavigate();

  const loginHandler = () => {
    const userData = JSON.parse(localStorage.getItem("USERDATA"));

    if (!userData || userData.length === 0) {
      setError("No user data found. Please sign up.");
      return;
    }

    const foundUser = userData.find(
      (data) => data.email === email && data.password === password
    );

    if (foundUser) {
      contextLoginHandler();
      alert(`Hello ${foundUser.fname}`);
      navigate(route.HOME);
    } else {
      setError("Oopss, Invalid Credintials!!!");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="container">
      <div className="login-card">
        <h3>Login Here</h3>
        <div className="input-fields">
          <input
            type="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Your Email Address"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Your Password"
          />
        </div>
        <span className="error">{error}</span>
        <div className="login-signup-btn button">
          <Link className="link" to={`${route.HOME}`}>
            <button className="logout-btn">Cancel</button>
          </Link>
          <button className="login-btn" onClick={loginHandler}>
            Login
          </button>
        </div>
        <Link className="link" to={`/${route.SIGNUP}`}>
          <button className="new-user">New User??? Create Account...</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
