const { Router } = require('express');
const indexController = require('../controllers/indexController');

indexRouter = Router();
indexRouter.get('/', indexController.indexGet);
indexRouter.get(
    '/:username/:directoryId',
    indexController.userDirectoryNavigation,
);

module.exports = indexRouter;

