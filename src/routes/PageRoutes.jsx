import { Route, Routes } from "react-router-dom"
import route from "./route.json"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Signin from "../pages/Signin"

const PageRoutes = () => {
  return (
    <Routes>
        <Route path={route.HOME} element={<Home/>}></Route>
        <Route path={route.LOGIN} element={<Login/>}></Route>
        <Route path={route.SIGNUP} element={<Signin/>}></Route>
    </Routes>
  )
}

export default PageRoutes