const { getDirectoryContents } = require('../services/fileService');

const indexGet = async (req, res) => {
    if (req.user) {
        // res.render('main', {
        //     pageTitle: 'FileUpload',
        //     folder: { id: req.user.rootDirectoryId },
        // });

        res.redirect(`/${req.user.username}/${req.user.rootDirectoryId}`);
        // if unauthenticated
    } else {
        res.render('main', { pageTitle: 'FileUpload', folder: {} });
    }
};

const userDirectoryNavigation = async (req, res) => {
    const { username, directoryId } = req.params;
    if (username !== req.user.username) res.redirect('/');

    const dirContents = await getDirectoryContents(directoryId, req.user.id);

    if (!dirContents) res.redirect('/');

    res.render('main', {
        pageTitle: 'FileUpload - Dashboard',
        folder: { id: directoryId },
        directoryListing: dirContents,
    });
};

module.exports = { indexGet, userDirectoryNavigation };
