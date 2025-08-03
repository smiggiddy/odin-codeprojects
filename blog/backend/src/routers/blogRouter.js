import { Router } from "express";

import {
  getPosts,
  newPost,
  deletePost,
  getComments,
  postComment,
  getPost,
} from "../controllers/blogController";
import { authorizedOnly, verifyTokenHeader } from "../middlewares/access";

const blogRouter = Router();

blogRouter.get("/", getPosts);
blogRouter.post("/", verifyTokenHeader, authorizedOnly, newPost);
blogRouter.delete("/", verifyTokenHeader, authorizedOnly, deletePost);
blogRouter.get("/:postId", getPost);
blogRouter.get("/:postId/comments", getComments);
blogRouter.post("/:postId/comments", postComment);

export { blogRouter };
