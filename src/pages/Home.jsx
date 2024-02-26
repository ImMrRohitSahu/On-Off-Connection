import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import route from "../routes/route.json"

const Home = () => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate()

  useEffect(()=>{
    if(!isAuth){
        navigate(`/${route.LOGIN}`)
    }
  },[isAuth, navigate])
  return (
    <div className="container">
      {isAuth && (
        <div className="img-div">
          <img src="https://images.unsplash.com/photo-1543332164-6e82f355badc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      )}
    </div>
  );
};

export default Home;
