import "./index.css";
import Posts from "./components/Posts";
import Navbar from "./components/Navbar";

export function App() {
  return (
    <div className="app">
      <Navbar />
      <Posts />
    </div>
  );
}

export default App;
