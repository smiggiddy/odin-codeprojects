const { Router } = require('express');
const fileController = require('../controllers/fileController');

const fileRouter = Router();

fileRouter.post(
    '/',
    fileController.upload.single('fileUpload'),
    fileController.fileUpload,
);
fileRouter.post('/directory', fileController.createDirectory);

module.exports = fileRouter;
