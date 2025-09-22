import { DeletePost } from "../api/posts";
import useAuth from "../hooks/loggedIn";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

const Div = styled.div`
  display: flex;
  gap: 1em;
`;

export default function PostAdminControls({ post, admin }) {
  const navigate = useNavigate();

  if (!admin) return null;
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
