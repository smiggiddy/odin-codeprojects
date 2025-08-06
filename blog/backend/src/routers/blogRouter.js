import { Router } from "express";

import {
  getPosts,
  newPost,
  editPost,
  deletePost,
  getComments,
  postComment,
  getPost,
} from "../controllers/blogController";
import { authorizedOnly, verifyTokenHeader } from "../middlewares/access";

const blogRouter = Router();

blogRouter.get("/", getPosts);
blogRouter.post("/", verifyTokenHeader, authorizedOnly, newPost);
blogRouter.put("/:postId", verifyTokenHeader, authorizedOnly, editPost);
blogRouter.delete("/:postId", verifyTokenHeader, authorizedOnly, deletePost);
blogRouter.get("/:postId", getPost);
blogRouter.get("/:postId/comments", getComments);
blogRouter.post("/:postId/comments", postComment);

export { blogRouter };
