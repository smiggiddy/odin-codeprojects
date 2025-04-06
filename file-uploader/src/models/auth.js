const { PrismaClient, Prisma } = require("@prisma/client");
// const { Prisma } = require("prisma");

class Auth {
  constructor() {
    this.primsa = new PrismaClient();
  }
  async createUser(user) {
    try {
      await this.primsa.user.create({
        data: {
          username: user.username,
          email: user?.email,
          password: user.password,
        },
      });
      return { message: "user created" };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === "P2002") {
          console.log("User must use a unique username");
          return { error: "must use unique username" };
        }
      }
    }
  }

  async allUsers() {
    return await this.primsa.user.findMany();
  }

  async getUserByUsername(username) {
    try {
      return await this.primsa.user.findUnique({
        where: {
          username: username,
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

