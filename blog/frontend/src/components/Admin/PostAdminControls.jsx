import { DeletePost } from "../../api/posts";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  gap: 1em;
`;

export default function PostAdminControls({ post }) {
  const navigate = useNavigate();

  return (
    <Div>
      <p>Edit</p>
      <button
        onClick={() => {
          try {
            DeletePost(post.id, header);
            navigate("/admin");
          } catch (err) {
            console.error(err);
          }
        }}
      >
        Delete
      </button>
    </Div>
  );
}
