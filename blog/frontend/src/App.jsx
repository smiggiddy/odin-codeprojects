import { useEffect, useState } from "react";
import "./index.css";
import Posts from "./components/Posts";

export function App() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/posts", { mode: "cors" })
      .then((response) => response.json())
      .then((r) => {
        setPosts(r.posts);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>loading...</p>;

  return (
    <div className="app">
      <Posts posts={posts} />
    </div>
  );
}

export default App;
