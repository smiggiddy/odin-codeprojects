import { useLoaderData } from "react-router-dom";
import AddComment from "./AddComment";

export default function Comments() {
  const { comments } = useLoaderData();

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
