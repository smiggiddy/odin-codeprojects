import styled from "styled-components";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import PostMetaData from "./PostMetaData";

const Div = styled.div`
  display: grid;
  justify-content: center;
`;

const Hr = styled.hr`
  margin: 1.25em 0;
`;

const ContentDiv = styled.div`
  margin: 2.5em 0 1em;
  white-space: pre-line;
`;

const CommentsHeading = styled.h2`
  margin: 1.25em 0;
`;

export default function Post() {
  const post = useLoaderData();

  return (
    <Div>
      <PostMetaData key={post.id} post={post} />
      <ContentDiv>{post.content}</ContentDiv>
      <Hr />
      <CommentsHeading>Comments</CommentsHeading>
      <Outlet />
    </Div>
  );
}
