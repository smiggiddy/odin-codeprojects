import "./index.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
