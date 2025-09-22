import prisma, { Prisma } from "./prismaClient";

async function getUser() {
  return await prisma.user.findFirst();
}

async function getAllPosts() {
  return await prisma.post.findMany({
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      dateCreated: "desc",
    },
    omit: {
      authorId: true,
    },
  });
}

async function getPostById(postId) {
  return await prisma.post.findFirst({
    where: {
      id: +postId,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
}

async function delPost(postId) {
  return await prisma.post.delete({
    where: {
      id: +postId,
    },
  });
}

async function createPost(data) {
  try {
    return await prisma.post.create({
      data: {
        title: data.title,
        content: data.content,
        authorId: data.authorId,
      },
    });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientValidationError) {
      throw e;
    }
  }
}

async function updatePost(data) {
  try {
    return await prisma.post.update({
      where: {
        id: +data.postId,
      },
      data: {
        title: data.title,
        content: data.content,
        authorId: data.authorId,
        dateUpdated: new Date(),
      },
    });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientValidationError) {
      throw e;
    }
  }
}

async function getCommentsByPost(postId) {
  return await prisma.comments.findMany({
    where: {
      postId: +postId,
    },
  });
}

async function getCommentById(commentId) {
  return await prisma.comments.findMany({
    where: {
      id: +commentId,
    },
  });
}

async function delComment(commentId) {
  return await prisma.comments.delete({
    where: {
      id: +commentId,
    },
  });
}

async function addComment(data) {
  try {
    return await prisma.comments.create({
      data: {
        content: data.content,
        authorId: data?.authorId,
        name: data.name,
        postId: +data.postId,
      },
    });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientValidationError) {
      console.log(e);
      throw "duplicate values or missing parameters";
    }
    throw "unable to add new comment";
  }
}

export {
  getUser,
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  delPost,
  getCommentsByPost,
  getCommentById,
  delComment,
  addComment,
};
