const multer = require('multer');
const Db = require('../models/db');
const upload = multer({ dest: '/tmp/testing/' });

const db = new Db();
//
// const createUserRootDir = async () => {
//     const user = await db.auth.getUserByUsername(username);
//     console.log(`USERID: ${user.id}`);
//     const dir = await db.file.createDirectory(user, 'root');
//     if (dir.error) {
//         console.log(dir.error);
//     } else {
//         console.log(dir.message);
//     }
// };

const createDirectory = async (req, res) => {
    const { parentId, 'directory-name': directoryName } = req.body;

    const result = await db.file.createDirectory(
        req.user,
        directoryName,
        Number(parentId),
    );

    res.redirect('/');
};

const fileUpload = async (req, res) => {
    console.log(req.file);
    const { folderId } = req.body;
    const file = {
        name: req.file.originalname,
        path: req.file.path,
        filename: req.file.filename,
        folderId: Number(folderId),
        mimetype: req.file.mimetype,
        size: req.file.size,
    };
    console.log(file, req.user);
    try {
        const result = await db.file.createFile(req.user.id, file);
        console.log(result);
    } catch (e) {
        console.log(e);
    }

    res.redirect('/');
};

const userDirs = (req, res) => {
    if (req.user) {
        // logic to grab the current dir based on path maybe
        // logic to grab all user dirs?
    }
};

const getFiles = (req, res) => {
    if (req.user) {
        // logic to grab the files
    }
};

module.exports = { createDirectory, upload, fileUpload };
