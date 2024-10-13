import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Main from "./components/main";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  const { path } = useParams();
  const [cartItems, setCartItems] = useState(0);
  return (
    <>
      <Navbar cartItems={cartItems} />
      {path === "cart" ? <Outlet /> : path === "store" ? <Outlet /> : <Main />}
    </>
  );
}

export default App;
