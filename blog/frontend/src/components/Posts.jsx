import styled from "styled-components";
import useBlogPosts from "../hooks/posts";
import { Link, useLoaderData } from "react-router-dom";
import PostMetaData from "./PostMetaData";

const Div = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1em 2em 1em;
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
  align-self: start;
`;

const HeadingOne = styled.h1`
  text-align: center;
`;

function blogPostPreview(content) {
  const maxChars = 200;
  let preview = content;
  if (content.length > maxChars) {
    preview = content.substring(0, maxChars) + ". . .";
  }
  return preview;
}

export default function Posts() {
  const posts = useLoaderData();

  return (
    <>
      <HeadingOne>Inspring thoughts collection</HeadingOne>
      <Div>
        {posts.map((post) => {
          return (
            <PostsDiv key={post.id}>
              <PostMetaData post={post} />
              <PreviewP className="post-body">
                {blogPostPreview(post.content)}
              </PreviewP>
            </PostsDiv>
          );
        })}
      </Div>
    </>
  );
}
