import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Outlet, redirect, useNavigate } from "react-router-dom";
import CreatePost from "../components/CreatePost";
import Posts from "../components/Posts";

export default function Admin() {
  const navigate = useNavigate();
  const [viewPosts, setViewPosts] = useState(false);
  const [createToggle, setCreateToggle] = useState(false);

  function logOut() {
    localStorage.removeItem("jwt_token");
    return navigate("/");
  }

  function handleViewPosts(event) {
    event.preventDefault();
    setViewPosts(!viewPosts);
  }

  function handleCreatePost(event) {
    event.preventDefault();
    setCreateToggle(!createToggle);
  }
  return (
    <>
      <h1> Admin Area </h1>
      <button onClick={logOut}>Logout</button>
      <button onClick={handleCreatePost}>Create Post</button>
      <button onClick={handleViewPosts}>View Posts</button>
      {createToggle ? <CreatePost /> : null}
      {viewPosts ? <Posts admin={true} /> : null}
    </>
  );
}
