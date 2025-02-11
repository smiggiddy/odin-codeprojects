function indexGet(req, res, next) {
  if (res.locals.currentUser) {
    res.send(
      `Thanks for stopping by ${res.locals.currentUser.username.toUpperCase()}<br><a href='/auth/logout'>Log Out</a>`,
    );
  }
  res.render("home", { pageTitle: "KeyNotes.App" });
}
module.exports = {
  indexGet,
};
