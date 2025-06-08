const multer = require('multer');
const Db = require('../models/db');
const {
    uploadFile,
    mkDirectory,
    getDirectoryContents,
    getProperPath,
} = require('../services/fileService');
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });
const upload = multer({ dest: '/tmp/odin/' });

const db = new Db();

const createDirectory = async (req, res) => {
    const { parentId, 'directory-name': directoryName } = req.body;
    const referer = req.get('referer');
    const result = await mkDirectory(directoryName, req.user, parentId);

    if (referer && result) {
        res.redirect(referer);
    } else {
        res.redirect('/');
    }
};

const fileUpload = async (req, res) => {
    const { folderId, folderName } = req.body;
    const referer = req.get('referer');

    let fullPath = await getProperPath(folderId);
    fullPath =
        fullPath === '/' ? `/${folderName}` : fullPath + `/${folderName}`;

    const path = `${req.user.username}/${fullPath}/${req.file.originalname}`;
    const file = {
        name: req.file.originalname,
        path: path,
        folderId: folderId,
        mimetype: req.file.mimetype,
        size: req.file.size,
    };
    const data = {
        name: req.file.originalname,
        path: path,
        data: req.file.filename,
    };

    try {
        const supabaseResult = await uploadFile(data);
        if (supabaseResult.error === null) {
            const result = await db.file.createFile(req.user.id, file);
            console.log(result);
        }
    } catch (e) {
        console.error(e);
    }

    res.redirect(referer);
};

const directoryContents = async (req, res) => {
    const { directoryId } = req.query;
    const { id } = req.user;
    const directoryListing = await getDirectoryContents(directoryId, id);

    if (directoryListing) {
        res.render('partials/directoryListing', {
            directoryListing: directoryListing,
            pageTitle: `FileUpload - ${directoryListing.name}`,
        });
    } else {
        res.redirect('/');
    }
};

const getFiles = (req, res) => {};

module.exports = { createDirectory, upload, fileUpload, directoryContents };
