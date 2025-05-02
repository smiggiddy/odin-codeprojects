const { PrismaClient, Prisma } = require('@prisma/client');
// const { Prisma } = require("prisma");

class Auth {
    constructor() {
        this.prisma = new PrismaClient();
    }
    async createUser(user) {
        try {
            await this.prisma.user.create({
                data: {
                    username: user.username,
                    email: user?.email,
                    password: user.password,
                },
            });
            return { message: 'user created' };
        } catch (e) {
            console.log(`PRISMA error ${e}`);
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                if (e.code === 'P2002') {
                    console.log('There is a unique constraint violation');
                    return {
                        error: 'must use unique username and a unique email.',
                    };
                }
            }
        }
    }

    async allUsers() {
        return await this.prisma.user.findMany();
    }

    async getUserByUsername(username) {
        try {
            return await this.prisma.user.findUnique({
                where: {
                    username: username,
                },
            });
        } catch (e) {
            return { error: e };
        }
    }

    async getUserById(id) {
        try {
            return await this.prisma.user.findUnique({
                where: {
                    id: id,
                },
            });
        } catch (e) {
            return { error: e };
        }
    }

    async getByEmail(email) {
        try {
            return await this.prisma.user.findUnique({
                where: {
                    email: email,
                },
            });
        } catch (e) {
            return { error: e };
        }
    }
}

// async function main() {
//     const allUsers = await primsa.user.findMany()
//     console.log(allUsers)
// }

// main()
//     .then(async () => {
//         await primsa.$disconnect()
//     })
//     .catch(async (e) => {
//         console.error(e)
//         await primsa.$disconnect()
//         process.exit(1)
//     })

module.exports = { Auth };
