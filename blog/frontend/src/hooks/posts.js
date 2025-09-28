import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function useBlogPosts(path) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const URL = process.env.BUN_PUBLIC_BACKEND_API_URL;
  const auth = useContext(AuthContext);

  const authenticatedFetch = async (url, options = {}) => {
    return fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
        ...options.headers,
      },
    });
  };

  const fetchPosts = async () => {
    fetch(`${URL}/${path}`, { mode: "cors" })
      .then((response) => response.json())
      .then((r) => {
        const data = r.posts || [];
        setPosts(data);
      })
      .catch((error) => {
        setError(error);
        setPosts([]);
        console.error(error);
        console.log(`Unable to load posts: ${error.message}`);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchPosts();
  }, [path]);

  const createPost = async (title, content) => {
    const response = await authenticatedFetch(`${URL}/posts`, {
      mode: "cors",
      method: "POST",
      body: JSON.stringify({ title: title, content: content }),
    });

    if (!response.ok) console.error("failed");
    await fetchPosts();
  };

  return { posts, loading, error, createPost };
}
