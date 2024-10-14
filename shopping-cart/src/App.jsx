import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  const [cart, setCart] = useState({});
  return (
    <>
      <Navbar cartItems={cart} />
      <Outlet context={[cart, setCart]} />
    </>
  );
}

export default App;
