const { getProperPath } = require('../services/fileService');

const getFullUploadPath = async (folderId, folderName, username, filename) => {
    let fullPath = await getProperPath(folderId);
    fullPath = fullPath === '/' ? `${folderName}` : fullPath + `/${folderName}`;

    return `${username}/${fullPath}/${filename}`;
};

const formatBytes = (bytes, decimals = 2) => {
    if (!+bytes) return '-';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = [
        'Bytes',
        'KiB',
        'MiB',
        'GiB',
        'TiB',
        'PiB',
        'EiB',
        'ZiB',
        'YiB',
    ];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

module.exports = { formatBytes, getFullUploadPath };
