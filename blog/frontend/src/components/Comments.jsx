import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AddComment from "./AddComment";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const URL = process.env.BUN_PUBLIC_BACKEND_API_URL;

  useEffect(() => {
    const loadComments = async () => {
      const commentData = await fetch(`${URL}/posts/${id}/comments`, {
        mode: "cors",
      });

      const data = await commentData.json();
      if (!data.error) {
        setComments(data.comments);
        setLoading(false);
      }
    };
    loadComments();
  }, [id]);
  return (
    <div>
      {comments.length > 0 ? (
        comments.map((c) => {
          return (
            <div key={c.id}>
              <p>
                "{c.content}" <span>-{c.name}</span>
              </p>
            </div>
          );
        })
      ) : (
        <p>"no comments"</p>
      )}
      <AddComment />
    </div>
  );
}
