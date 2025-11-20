import { Link } from "react-router-dom";
import styled from "styled-components";

function TitleFormat(title) {
  const maxChars = 100;
  let titlePreview = title;
  if (title.length > maxChars) {
    titlePreview = title.substring(0, maxChars) + ". . .";
  }

  return titlePreview;
}

const Div = styled.div`
  display: flex;
  gap: 0.5em;
  align-self: start;
`;

const Datep = styled.p`
  font-weight: 300;
`;

const Span = styled.span`
  font-weight: 300;
`;

const Authorp = styled.p`
  font-weight: 600;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  align-self: start;

  &:hover {
    text-decoration: underline;
  }
`;
export default function PostMetaData({ post }) {
  return (
    <>
      <StyledLink to={`/post/${post.id}`}>
        <h1 className="post-title">{post.title}</h1>
      </StyledLink>
      <Div>
        <Datep>{post.dateCreated.substring(0, 10)}</Datep>
        <span>—</span>
        <Authorp>
          <Span>by</Span> {post.author.name}
        </Authorp>
      </Div>
    </>
  );
}
