import prisma from "./prismaClient";

async function getUser() {
  return await prisma.user.findFirst();
}

async function getAllPosts() {
  return await prisma.post.findMany();
}

async function getPostById(postId) {
  return await prisma.post.findMany({
    where: {
      id: postId,
    },
  });
}

async function delPost(postId) {
  return await prisma.post.delete({
    where: {
      id: postId,
    },
  });
}

async function createPost(data) {
  return await prisma.post.create({
    data: {
      title: data.title,
      content: data.content,
      authorId: data.authorId,
    },
  });
}

async function getCommentById(commentId) {
  return await prisma.comments.findMany({
    where: {
      id: commentId,
    },
  });
}

async function delComment(commentId) {
  return await prisma.comments.delete({
    where: {
      id: commentId,
    },
  });
}

async function postComment(data) {
  return await prisma.comments.create({
    data: {
      content: data.content,
      authorId: data?.authorId,
      name: data.name,
      postId: data.postId,
    },
  });
}

export {
  getUser,
  getAllPosts,
  getPostById,
  createPost,
  delPost,
  getCommentById,
  delComment,
  postComment,
};
