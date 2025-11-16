import { useState } from "react";
import { Form } from "react-router-dom";

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
        <textarea
          name="comment"
          id="comment"
          placeholder="enter your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
