import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useParams } from "react-router-dom";

export default function AddComment() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const { header } = useContext(AuthContext);
  const { id } = useParams();
  const URL = process.env.BUN_PUBLIC_BACKEND_API_URL;

  function handleClick(e) {
    e.preventDefault();
    fetch(`${URL}posts/${id}/comments`, {
      method: "POST",
      mode: "cors",
      headers: { ...header, "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, content: comment }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <input
        type="text"
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
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
