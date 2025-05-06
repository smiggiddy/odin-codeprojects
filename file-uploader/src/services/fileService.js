const Db = require('../models/db');

const db = new Db();

async function getDirectoryContents(directoryId, userId) {
    return await db.file.getDirectoryContents(Number(directoryId), userId);
}

async function mkDirectory(directoryName, user, parentDirectoryId) {
    return await db.file.createDirectory(
        user,
        directoryName,
        Number(parentDirectoryId),
    );
}

module.exports = { mkDirectory, getDirectoryContents };
