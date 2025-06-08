const { Router } = require('express');
const indexController = require('../controllers/indexController');
const { loggedIn } = require('../middlewares/auth');

const indexRouter = Router();
indexRouter.get('/', indexController.indexGet);
indexRouter.get(
    '/fs/:username/:directoryId',
    loggedIn,
    indexController.userDirectoryNavigation,
);

module.exports = indexRouter;
