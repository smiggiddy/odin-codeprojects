const { PrismaClient } = require("@prisma/client");
// const { Prisma } = require("prisma");

const primsa = new PrismaClient()

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

async function createUser(user) {
    await primsa.user.create({
        data: {
            username: user.username,
            email: user?.email,
            password: user.password
        }
    })
}

async function allUsers() {
    return await primsa.user.findMany()
}

module.exports = { createUser, allUsers }