import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  const [cart, setCart] = useState({});
  const [items, setItems] = useState(null);
  return (
    <>
      <Navbar cartItems={cart} />
      <Outlet context={[cart, setCart, items, setItems]} />
    </>
  );
}

export default App;
