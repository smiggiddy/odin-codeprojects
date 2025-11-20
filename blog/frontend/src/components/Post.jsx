import styled from "styled-components";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import PostMetaData from "./PostMetaData";

const Div = styled.div`
  display: grid;
  justify-content: center;
`;

export default function Post() {
  const post = useLoaderData();
  // const { id } = useParams();
  // const { post, loading, error } = usePost(id);

  return (
    <Div>
      <PostMetaData key={post.id} post={post} />
      <h2>Comments</h2>
      <Link to="/posts">Back</Link>
      <Outlet />
    </Div>
  );
}
