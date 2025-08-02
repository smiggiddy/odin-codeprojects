import { Router } from "express";

import { getAllPosts } from "../prisma/queries";
import { authorizedOnly, verifyTokenHeader } from "../middlewares/access";

const blogRouter = Router();

blogRouter.get("/", async (req, res) => {
  const posts = await getAllPosts();
  res.json({ posts: posts });
});

blogRouter.post("/", verifyTokenHeader, authorizedOnly, async (req, res) => {
  res.json({ msg: req.body });
});

export { blogRouter };
