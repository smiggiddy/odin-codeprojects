import { useState } from "react";
import useBlogPosts from "../../hooks/posts";
export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const URL = process.env.BUN_PUBLIC_BACKEND_API_URL;
  const { createPost } = useBlogPosts("posts");

  const handleClick = async (e) => {
    e.preventDefault();
    await createPost(title, content);

    setTitle("");
    setContent("");
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
