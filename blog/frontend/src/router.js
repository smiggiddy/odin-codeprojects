import App from "./App.jsx";
import Admin from "./pages/Admin.jsx";
import Login from "./components/Login.jsx";
import AdminRoute from "./AdminRoute.jsx";
import { createBrowserRouter } from "react-router-dom";
import Post from "./components/Post.jsx";
import Posts from "./components/Posts.jsx";
import { GetPosts as postsLoader, GetPost as postLoader } from "./api/posts.js";
import FrontPage from "./pages/FrontPage.jsx";
import {
  AddComment as commentAction,
  GetComments as commentsLoader,
} from "./api/comments.js";
import Comments from "./components/Comments.jsx";

const ErrorPage = () => {
  return <h1>Error! Not Found</h1>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <FrontPage />,
      },
      {
        path: "post/:id",
        element: <Post />,
        loader: postLoader,
        children: [
          {
            index: true,
            element: <Comments />,
            loader: commentsLoader,
            action: commentAction,
          },
        ],
      },
      {
        path: "posts",
        element: <Posts />,
        loader: postsLoader,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "admin",
    element: (
      <AdminRoute>
        <Admin />
      </AdminRoute>
    ),
    children: [
      {
        path: "post/:id",
        element: <Post admin={true} />,
      },
      {
        path: "posts",
        element: <Posts admin={true} />,
      },
    ],
  },
]);

export default router;
