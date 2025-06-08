const { Router } = require('express');
const fileController = require('../controllers/fileController');
const { loggedIn } = require('../middlewares/auth');

const fileRouter = Router();

fileRouter.post(
    '/',
    fileController.upload.single('fileUpload'),
    fileController.fileUpload,
);
fileRouter.post('/directory', loggedIn, fileController.createDirectory);
fileRouter.get('/directory', loggedIn, fileController.directoryContents);

module.exports = fileRouter;
