import {
  addComment,
  createPost,
  delPost,
  getAllPosts,
  getCommentsByPost,
  getPostById,
} from "../prisma/queries";

async function getPosts(req, res) {
  const posts = await getAllPosts();
  res.json({ posts: posts });
}

async function getPost(req, res) {
  const postId = req.params.postId;
  try {
    const result = await getPostById(postId);
    res.status(200).json({ post: result });
  } catch {
    res.status(404).json({ error: "post not found" });
  }
}

async function newPost(req, res) {
  try {
    const data = { ...req.body, authorId: req.user.id };
    const result = await createPost(data);
    res.json({ msg: "new post created.", result: result }).status(200);
  } catch (e) {
    res.json({ error: e.message }).status(400);
  }
}

async function deletePost(req, res) {
  try {
    const postId = req.body.postId;
    const result = await delPost(postId);
    res.json({ msg: "post deleted", result: result }).status(200);
  } catch (e) {
    res.json({ error: e }).status(400);
  }
}

async function getComments(req, res) {
  const { postId } = req.params;
  try {
    const comments = await getCommentsByPost(+postId);
    res.status(200).json({ comments });
  } catch {
    res.status(400).json({ error: "unable to retrieve comments" });
  }
}

async function postComment(req, res) {
  const { postId } = req.params;
  try {
    const data = {
      id: postId,
      ...((req.body && req.user?.id && { authorId: req?.user.id }) || req.body),
    };
    console.log(data);
    const result = await addComment(data);
    res.status(200).json({ msg: "comment added", result: result });
  } catch (e) {
    console.log(e);
    res.status(400).json({ error: "posting comment" });
  }
}

export { getPost, getPosts, newPost, deletePost, getComments, postComment };
