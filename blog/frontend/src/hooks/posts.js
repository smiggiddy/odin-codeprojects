import { useEffect, useState } from "react";

export default function useBlogPosts(path) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const URL = process.env.BUN_PUBLIC_BACKEND_API_URL;
  useEffect(() => {
    fetch(`${URL}/${path}`, { mode: "cors" })
      .then((response) => response.json())
      .then((r) => {
        setPosts(r.posts);
      })
      .catch((error) => {
        setError(error);
        setPosts([]);
        console.error(error);
        console.log(`Unable to load posts: ${error.message}`);
      })
      .finally(() => setLoading(false));
  }, []);

  return { posts, loading, error };
}
