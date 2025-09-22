import styled from "styled-components";

const Div = styled.div`
  display: flex;
  gap: 0.5em;
`;
export default function PostMetaData({ post }) {
  return (
    <>
      <h1 className="post-title">{post.title}</h1>
      <Div>
        <p className="post-author">By: {post.author.name}</p>
        <p className="post-date">{post.dateCreated.substring(0, 10)}</p>
      </Div>
    </>
  );
}
