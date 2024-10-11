import { useState } from "react";
import "./App.css";
import Main from "./components/main";
import Navbar from "./components/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}

export default App;
