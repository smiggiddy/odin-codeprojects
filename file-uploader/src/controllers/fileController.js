const multer = require('multer');
const Db = require('../models/db');
const {
    mkDirectory,
    getDirectoryContents,
} = require('../services/fileService');
const upload = multer({ dest: '/tmp/testing/' });

const db = new Db();

const createDirectory = async (req, res) => {
    const { parentId, 'directory-name': directoryName } = req.body;
    const referer = req.get('referer');
    const result = await mkDirectory(directoryName, req.user, Number(parentId));

    if (referer && result) {
        res.redirect(referer);
    } else {
        res.redirect('/');
    }
};

const fileUpload = async (req, res) => {
    const { folderId } = req.body;
    const file = {
        name: req.file.originalname,
        path: req.file.path,
        filename: req.file.filename,
        folderId: Number(folderId),
        mimetype: req.file.mimetype,
        size: req.file.size,
    };
    try {
        const result = await db.file.createFile(req.user.id, file);
        console.log(result);
    } catch (e) {
        console.log(e);
    }

    res.redirect('/');
};

const directoryContents = async (req, res) => {
    if (!req.user) return res.redirect('/');

    const { directoryId } = req.query;
    const { id } = req.user;
    const directoryListing = await getDirectoryContents(
        Number(directoryId),
        id,
    );

    if (directoryListing) {
        res.render('partials/directoryListing', {
            directoryListing: directoryListing,
            pageTitle: `FileUpload - ${directoryListing.name}`,
        });
    } else {
        res.redirect('/');
    }
};

const getFiles = (req, res) => {
    if (req.user) {
        // logic to grab the files
    }
};

module.exports = { createDirectory, upload, fileUpload, directoryContents };
