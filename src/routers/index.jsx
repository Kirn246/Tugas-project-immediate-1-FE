import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Beranda from "../pages/Beranda";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/beranda" element={<Beranda />} />
    </Routes>
  );
};
  
export default Router;
