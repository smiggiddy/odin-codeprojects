import styled from "styled-components";
import { Link } from "react-router-dom";
import PostAdminControls from "./PostAdminControls";
import PostMetaData from "../PostMetaData";

const Div = styled.div`
  display: grid;
  justify-content: center;
`;

const PostsDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 100%;
  padding: 1em;
`;

const PreviewP = styled.p`
  // overflow: hidden;
  // white-space: nowrap;
  // text-overflow: ellipsis;
`;

function blogPostPreview(content) {
  const maxChars = 200;
  let preview = content;
  if (content.length > maxChars) {
    preview = content.substring(0, maxChars) + ". . .";
  }
  return preview;
}

export default function Posts({ posts, loading, error }) {
  if (loading) return <p>loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Div>
      {posts.map((post) => {
        return (
          <PostsDiv key={post.id}>
            <PostMetaData post={post} />
            <PostAdminControls post={post} />
            <PreviewP className="post-body">
              {blogPostPreview(post.content)}
            </PreviewP>
            <Link to={`/post/${post.id}`}>Read More...</Link>
          </PostsDiv>
        );
      })}
    </Div>
  );
}
