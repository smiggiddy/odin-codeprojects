const { PrismaClient } = require('@prisma/client');

class File {
    constructor() {
        this.prisma = new PrismaClient();
    }

    async createDirectory(user, dirName, parentId) {
        try {
            await this.prisma.folder.create({
                data: {
                    name: dirName,
                    owner_user_id: user.id,
                    parentId: parentId,
                },
            });
            return { message: 'dir created' };
        } catch (e) {
            console.error(e);
            return { error: 'issue creating dir' };
        }
    }

    async getDirectoryIdByName(dirId, userId) {
        try {
            await this.prisma.folder.findUnique({
                where: {
                    id: dirId,
                },
            });
        } catch (e) {
            console.error(e);
        }
    }

    async getUserRootDirectoryId(userId) {
        try {
            const dir = await this.prisma.folder.findFirst({
                where: {
                    owner_user_id: userId,
                    name: 'root',
                    parentId: null,
                },
            });

            if (dir !== null) {
                return dir.id;
            } else {
                return null;
            }
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    async getDirectoriesByUser() {}

    async createFile(userId, file) {
        try {
            await this.prisma.file.create({
                data: {
                    name: file.name,
                    size: file.size,
                    mimetype: file.mimetype,
                    url: file.path,
                    folderId: file.folderId,
                    ownerId: userId,
                },
            });
        } catch (e) {
            console.error(e);
        }
    }
}

module.exports = { File };
