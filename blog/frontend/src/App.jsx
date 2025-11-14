import "./index.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
