const Db = require('../models/db');

const db = new Db();
const indexGet = async (req, res) => {
    // const data = await db.allUsers()
    // console.dir(data)
    if (req.user) {
        const id = await db.file.getUserRootDirectoryId(req.user.id);
        if (id === null) console.log('id is null');
        console.log(id);
        res.render('main', { pageTitle: 'FileUpload', folder: { id: id } });
    } else {
        res.render('main', { pageTitle: 'FileUpload', folder: {} });
    }
};

module.exports = { indexGet };
