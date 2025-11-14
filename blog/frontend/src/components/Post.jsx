import styled from "styled-components";
import { use, useEffect, useState } from "react";
import { Link, Navigate, useLoaderData, useParams } from "react-router-dom";
import Comments from "./Comments";
import PostMetaData from "./PostMetaData";

const Div = styled.div`
  display: grid;
  justify-content: center;
`;

// function usePost(id) {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [post, setPost] = useState({});
//
//   const URL = process.env.BUN_PUBLIC_BACKEND_API_URL;
//
//   useEffect(() => {
//     const getPost = async () => {
//       try {
//         const comments = await fetch(`${URL}/posts/${id}/`, {
//           mode: "cors",
//         });
//         const data = await comments.json();
//         if (data.post) {
//           setPost(data.post);
//         }
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getPost();
//   }, [id, URL]);
//
//   return { post, loading, error };
// }

export default function Post() {
  const post = useLoaderData();
  // const { id } = useParams();
  // const { post, loading, error } = usePost(id);

  return (
    <Div>
      <PostMetaData key={post.id} post={post} />
      <Link to="/posts">Back</Link>
      <h2>Comments</h2>
      <Comments />
    </Div>
  );
}
