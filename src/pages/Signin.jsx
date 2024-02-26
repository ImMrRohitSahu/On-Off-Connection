import { useState } from "react";
import route from "../routes/route.json";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const clearInput = () => {
    setFname("");
    setLname("");
    setEmail("");
    setMobile("");
    setPassword("");
    setCpassword("");
    setError("");
  };

  const createHandler = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9\s]).{8,}$/;
    const mobileRegex = /^[6-9]\d{9}$/;
    if (fname && lname && email && mobile && password && cpassword) {
      if (fname && fname.length >= 2 && fname.length <= 20) {
        if (lname && lname.length >= 2 && lname.length <= 20) {
          if (email && emailRegex.test(email)) {
            if (mobile && mobileRegex.test(mobile)) {
              if (password && passwordRegex.test(password)) {
                if (password === cpassword) {
                  const exixtingData =
                    JSON.parse(localStorage.getItem("USERDATA")) || [];
                  const newUserData = {
                    fname,
                    lname,
                    email,
                    mobile,
                    password,
                  };
                  exixtingData.push(newUserData);
                  localStorage.setItem(
                    "USERDATA",
                    JSON.stringify(exixtingData)
                  );

                  alert("Successfully Created New Account...");
                  clearInput();
                  setTimeout(() => {
                    navigate(`/${route.LOGIN}`);
                  }, 1000);
                } else {
                  setError("Both Password Not Matched!!!");
                  setTimeout(() => {
                    setError("");
                  }, 5000);
                }
              } else {
                setError(
                  "Password Should Contain Atleast 8 Charcters - Upper,Lower,Numeric,Symbol!!!"
                );
                setTimeout(() => {
                  setError("");
                }, 5000);
              }
            } else {
              setError("Invalid Mobile Number!!!");
              setTimeout(() => {
                setError("");
              }, 5000);
            }
          } else {
            setError("Invalid Email Address!!!");
            setTimeout(() => {
              setError("");
            }, 5000);
          }
        } else {
          setError("Last Name Should be between 2 to 20 Character!!!");
          setTimeout(() => {
            setError("");
          }, 5000);
        }
      } else {
        setError("First Name Should be between 2 to 20 Character!!!");
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    } else {
      setError("Please Fill All The Fields!!!");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="container">
      <div className="login-card">
        <h3>SignUp Here</h3>
        <div className="input-fields">
          <input
            type="text"
            placeholder="First Name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Your Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Re-Enter Password"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
          />
        </div>
        <span className="error">{error}</span>
        <div className="login-signup-btn button">
          <button className="logout-btn">Cancel</button>
          <button className="signup-btn" onClick={createHandler}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
