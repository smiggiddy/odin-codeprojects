import styled from "styled-components";
import { useEffect, useState } from "react";

const Div = styled.div`
  display: grid;
  justify-content: center;
`;

export default function Posts(props) {
  const [posts, setPosts] = useState(null);
  const [statusMessage, setStatusMessage] = useState("loading");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/posts", { mode: "cors" })
      .then((response) => response.json())
      .then((r) => {
        setPosts(r.posts);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setStatusMessage(`Unable to load posts: ${error.message}`);
      });
  }, []);

  if (loading) return <p>{statusMessage}</p>;

  return (
    <Div>
      {posts.map((post) => {
        return (
          <div key={post.id} className="post">
            <h1 className="post-title">{post.title}</h1>
            <h3 className="post-author">By: {post.author.name}</h3>
            <p className="post-body">{post.content}</p>
          </div>
        );
      })}
    </Div>
  );
}
