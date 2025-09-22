import styled from "styled-components";
import { use, useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import Comments from "./Comments";
import useAuth from "../hooks/loggedIn";
import { AuthContext } from "../contexts/AuthContext";
import PostAdminControls from "./PostAdminControls";
import PostMetaData from "./PostMetaData";

const Div = styled.div`
  display: grid;
  justify-content: center;
`;

function usePost(id) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [post, setPost] = useState({});

  const URL = process.env.BUN_PUBLIC_BACKEND_API_URL;

  useEffect(() => {
    const getPost = async () => {
      try {
        const comments = await fetch(`${URL}/posts/${id}/`, {
          mode: "cors",
        });
        const data = await comments.json();
        if (data.post) {
          setPost(data.post);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, [id, URL]);

  return { post, loading, error };
}

export default function Post() {
  const { id } = useParams();
  const { post, loading, error } = usePost(id);
  const { header } = useContext(AuthContext);

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Div>
      <PostMetaData key={post.id} post={post} />
      <PostAdminControls post={post} />
      <Link to="/">Back</Link>
      <h2>Comments</h2>
      <Comments />
    </Div>
  );
}
