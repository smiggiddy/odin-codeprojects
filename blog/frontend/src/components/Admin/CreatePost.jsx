import { useState } from "react";
export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const URL = process.env.BUN_PUBLIC_BACKEND_API_URL;

  const handleClick = (e) => {
    e.preventDefault();
    fetch(`${URL}/posts`, {
      mode: "cors",
      method: "POST",
      body: JSON.stringify({ title: title, content: content }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) =>
        res.json().then(() => {
          setTitle("");
          setContent("");
        }),
      )
      .catch((e) => console.error(e));
  };

  return (
    <>
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="title">Content</label>
        <textarea
          id="title"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button onClick={handleClick}>Submit</button>
    </>
  );
}
