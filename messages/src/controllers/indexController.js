const db = require("../models/query");

function indexGet(req, res) {
  if (res.locals.currentUser) {
    const keynotes = db.getEveryNote();
    const userLikedPosts = db.getLikesByUser(res.locals.currentUser.user_id);

    return res.render("feed", {
      pageTitle: "InspiredCliches | Feed",
      keynotes: keynotes,
      userLikedPosts: userLikedPosts,
    });
  }
  res.render("home", { pageTitle: "InspiredCliches" });
}

function addLike(req, res) {
  const { noteId } = req.query;

  const noteExits = noteId ? db.getNoteById(noteId) : null;

  if (res.locals.currentUser && noteExits) {
    const userId = res.locals.currentUser.user_id;
    if (db.checkIfNotedLiked(noteId, userId)) {
      db.deleteLike(noteId, userId);
    } else {
      db.insertLike(Number(noteId), userId);
    }
  }
  res.redirect("/");
}

function addNotePost(req, res) {
  const { message, media } = req.body;

  if (res.locals.currentUser) {
    const userId = res.locals.currentUser.user_id;
    db.putNewNote({ message: message, media: null, userId: userId });
  }
  res.redirect("/");
}

function deleteNote(req, res) {
  const { messageId, userId } = req.query;

  if (res.locals.currentUser) {
    const message = db.getNoteById(messageId);

    if (message.user_id === Number(userId)) {
      db.deleteNote(Number(messageId));
    }
    res.redirect("/");
  }
}

function addNoteGet(req, res) {
  if (res.locals.currentUser)
    return res.render("note-form", { pageTitle: "InspiredCliches | New Note" });

  res.redirect("/");
}

function getProfile(req, res) {
  const { userId } = req.query;

  const userExists = userId ? db.getUserById(userId) : null;

  if (res.locals.currentUser) {
    if (userExists) {
      const sumUserPosts = db.getSumNotesByUserId(userId);
      const allPosts = db.getAllNotesByUserId(userId);
      res.render("view-profile", {
        pageTitle: "InspiredCliches | Edit Profile",
        user: userExists,
        totalPosts: sumUserPosts,
        allPosts: allPosts,
      });
    } else {
      res.redirect("/");
    }
  }
}

module.exports = {
  indexGet,
  addNoteGet,
  addNotePost,
  deleteNote,
  addLike,
  getProfile,
};
