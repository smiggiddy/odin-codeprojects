const Db = require('../models/db');

const { createClient } = require('@supabase/supabase-js');
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const db = new Db();

async function createFileRecord(userId, fileData) {
    return await db.file.createFile(userId, fileData);
}

async function editFile(file) {
    return await db.file.editFile(file);
}

async function getDirectoryContents(directoryId, userId) {
    return await db.file.getDirectoryContents(directoryId, userId);
}

async function getParentDirectories(directoryId) {
    return await db.file.getParentFolders(directoryId);
}

async function uploadToStorage(file) {
    const { data, error } = await supabase.storage
        .from('odin')
        .upload(file.path, file.data, { upsert: true });

    return { data: data, error: error };
}

async function mkDirectory(directoryName, user, parentDirectoryId) {
    return await db.file.createDirectory(
        user,
        directoryName,
        parentDirectoryId,
    );
}

async function rmDirectory(directoryName, user, parentDirectoryId) {
    return await db.file.deleteDirectory(
        user,
        directoryName,
        parentDirectoryId,
    );
}

async function getProperPath(directoryId) {
    const fullPath = await db.file.getParentFolders(directoryId);
    let directories;
    if (fullPath && fullPath.length > 0) {
        directories = fullPath.map((d) => d.name);
    } else {
        return '/';
    }

    return directories.join('/');
}

async function getFileMetaData(fileId) {
    return await db.file.getFileMetaData(fileId);
}

module.exports = {
    createFileRecord,
    editFile,
    uploadToStorage,
    mkDirectory,
    getParentDirectories,
    getDirectoryContents,
    getProperPath,
    rmDirectory,
    getFileMetaData,
};
