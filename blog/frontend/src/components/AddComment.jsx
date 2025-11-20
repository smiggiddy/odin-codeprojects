import { useState } from "react";
import { Button } from "./Button";
import { Form } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const TextArea = styled.textarea`
  width: 100%;
`;

const SubmitButton = styled(Button)`
  margin: 1em 0;
  max-width: 200px;
`;

export default function AddComment() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  return (
    <div>
      <Form
        method="post"
        onSubmit={() => {
          setName("");
          setComment("");
        }}
      >
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          placeholder="enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <TextArea
          name="comment"
          id="comment"
          placeholder="enter your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></TextArea>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </div>
  );
}
