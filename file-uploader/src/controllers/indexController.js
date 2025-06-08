const {
    getDirectoryContents,
    getParentDirectories,
} = require('../services/fileService');

const indexGet = async (req, res) => {
    if (req.user) {
        res.redirect(`/fs/${req.user.username}/${req.user.rootDirectoryId}`);
        // if unauthenticated redirect
    } else {
        res.render('main', { pageTitle: 'FileUpload', folder: {} });
    }
};

const userDirectoryNavigation = async (req, res) => {
    const { username, directoryId } = req.params;

    if (username !== req.user.username) res.redirect('/');

    const dirContents = await getDirectoryContents(directoryId, req.user.id);
    const parentDirectories = await getParentDirectories(directoryId);

    if (!dirContents || !parentDirectories) res.redirect('/');

    res.render('main', {
        pageTitle: 'FileUpload - Dashboard',
        folder: { id: directoryId, name: dirContents.name },
        directoryListing: dirContents,
        parentDirectories: parentDirectories,
    });
};

module.exports = { indexGet, userDirectoryNavigation };
