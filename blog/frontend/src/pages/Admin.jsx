import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Outlet, redirect, useNavigate } from "react-router-dom";
import CreatePostForm from "../components/Admin/CreatePostForm.jsx";
import AdminPosts from "../components/Admin/Posts";
import useBlogPosts from "../hooks/posts.js";

export default function Admin() {
  const navigate = useNavigate();
  const [viewPosts, setViewPosts] = useState(false);
  const [createToggle, setCreateToggle] = useState(false);
  const [posts, setPosts] = useState([]);
  const { error, loading, createPost } = useBlogPosts({
    path: "posts",
    posts: posts,
    setPosts: setPosts,
  });

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
      {createToggle ? <CreatePostForm createPost={createPost} /> : null}
      {viewPosts ? (
        <AdminPosts posts={posts} loading={loading} error={error} />
      ) : null}
    </>
  );
}
// {createToggle ? <CreatePost /> : null}
