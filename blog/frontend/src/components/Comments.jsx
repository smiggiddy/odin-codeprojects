import { useLoaderData } from "react-router-dom";
import AddComment from "./AddComment";
import styled from "styled-components";

const Container = styled.div`
  padding: 0.5em 0;
`;

const Flex = styled(Container)`
  display: flex;
`;

const Col = styled(Flex)`
  flex-direction: column;
`;

const CommentAuthor = styled.p`
  font-weight: 700;
`;

const CommentDate = styled.p`
  font-weight: 200;
`;

function CommentMetaData(props) {
  return (
    <Col>
      <CommentAuthor>{props.name}</CommentAuthor>
      <CommentDate>{props.date.substring(0, 10)}</CommentDate>
    </Col>
  );
}

export default function Comments() {
  const { comments } = useLoaderData();

  return (
    <div>
      {comments.length > 0 ? (
        comments.map((c) => {
          return (
            <Container key={c.id}>
              <CommentMetaData name={c.name} date={c.dateCreated} />
              <p>{c.content}</p>
            </Container>
          );
        })
      ) : (
        <p>"no comments"</p>
      )}
      <AddComment />
    </div>
  );
}
