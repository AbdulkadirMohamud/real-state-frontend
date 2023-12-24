import { Button } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Properties from "./pages/properties/Properties";
import SignUp from "./pages/registeration/SignUp";
import Login from "./pages/registeration/Login";


export default function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/properties" element={<Properties/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  )
}