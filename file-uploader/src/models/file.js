const { Prisma, PrismaClient } = require('@prisma/client');

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

    async deleteDirectory(user, dirName) {
        try {
            await this.prisma.folder.delete({
                data: {
                    name: dirName,
                },
            });
        } catch (e) {
            console.error(e);
            return { error: 'issue deleting directory' };
        }
    }

    async getDirectoryIdByName(dirId) {
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

    async getDirectoryContents(directoryId, ownerId) {
        try {
            const contents = await this.prisma.folder.findFirst({
                relationLoadStrategy: 'join',
                include: {
                    File: true,
                    Directories: true,
                },
                where: {
                    id: directoryId,
                    owner_user_id: ownerId,
                },
            });
            return contents;
        } catch (e) {
            console.error(e);
            return { error: e };
        }
    }

    async createFile(userId, file) {
        try {
            const result = await this.prisma.file.create({
                data: {
                    name: file.name,
                    size: file.size,
                    mimetype: file.mimetype,
                    url: file.path,
                    folderId: file.folderId,
                    ownerId: userId,
                    id: file.id,
                },
            });
            return result;
        } catch (e) {
            return e;
        }
    }

    async editFile(file) {
        const data = await this.prisma.file.update({
            where: { id: file.id },
            data: {
                name: file.name,
                size: file.size,
                mimetype: file.mimetype,
                url: file.path,
                modifiedAt: new Date(),
            },
        });
        return data;
    }

    async deleteFile(userId, fileId) {
        try {
            const result = await this.prisma.file.delete({
                data: {
                    id: fileId,
                    ownerId: userId,
                },
            });
            return result;
        } catch (e) {
            console.error(e);
            return e;
        }
    }
    async getFileMetaData(fileId) {
        try {
            const result = await this.prisma.file.findUnique({
                where: {
                    id: fileId,
                },
            });
            return result;
        } catch (e) {
            console.error(e);
            return e;
        }
    }
    async getParentFolders(folderId) {
        const result = await this.prisma.$queryRaw`
	    WITH RECURSIVE folder_hierarchy AS (
	      SELECT id, name, "parentId", 1 AS level
	      FROM "Folder"
	      WHERE id = ${folderId}
	      
	      UNION ALL
	      
	      SELECT f.id, f.name, f."parentId", h.level + 1
	      FROM "Folder" f
	      JOIN folder_hierarchy h ON f.id = h."parentId"
	    )
	    SELECT id, name
	    FROM folder_hierarchy
	    WHERE id != ${folderId}
	    ORDER BY level DESC;
	`;

        return result;
    }
}

module.exports = { File };
