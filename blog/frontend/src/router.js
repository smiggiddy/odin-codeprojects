import App from "./App.jsx";
import Admin from "./pages/Admin.jsx";
import Login from "./components/Login.jsx";
import AdminRoute from "./AdminRoute.jsx";
import { createBrowserRouter } from "react-router-dom";
import Post from "./components/Post.jsx";
import Posts from "./components/Posts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "post/:id",
    element: <Post />,
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
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
