const multer = require('multer');
const {
    uploadToStorage,
    mkDirectory,
    getDirectoryContents,
    createFileRecord,
    getFileMetaData,
    editFile,
} = require('../services/fileService');
const { getFullUploadPath, formatBytes } = require('../utils/formatHelpers');
const { Prisma } = require('@prisma/client');
const upload = multer({ dest: '/tmp/odin/' });

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

    try {
        const path = await getFullUploadPath(
            folderId,
            folderName,
            req.user.username,
            req.file.originalname,
        );

        const fileMetaData = {
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

        const supabaseResult = await uploadToStorage(data);
        if (!supabaseResult.error) {
            // make sure the uploaded file and the db have the same ID
            fileMetaData.id = supabaseResult.data.id;
            const result = await createFileRecord(req.user.id, fileMetaData);
            if (result instanceof Prisma.PrismaClientKnownRequestError) {
                // if user uploads the samefile name, just overwrite it
                await editFile(fileMetaData);
            }
            res.redirect(referer);
        } else {
            console.error(supabaseResult.error);
            res.status(500).redirect(referer);
        }
    } catch (e) {
        console.error(e);
        res.status(500).redirect(referer);
    }
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

const getFileData = async (req, res) => {
    const { fileId } = req.query;

    try {
        const file = await getFileMetaData(fileId);
        file.size = formatBytes(file.size);

        res.render('partials/fileInfo', {
            file: file,
            pageTitle: 'FileUpload - File Details',
        });
    } catch (e) {
        console.error(e);
        res.redirect('/');
    }
};

const editFilePost = async (req, res) => {
    const { id, name, url, modifiedAt, mimetype } = req.body;
};

module.exports = {
    createDirectory,
    upload,
    fileUpload,
    directoryContents,
    getFileData,
};
