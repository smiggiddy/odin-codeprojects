import prisma from "./src/prisma/prismaClient";

const bcrypt = require("bcrypt");

async function setup() {
  const userPw = process.env.ADMIN_PW || "smigtech";
  const hashedPw = await bcrypt.hash(userPw, 8);
  const user = await prisma.user.create({
    data: {
      name: "Smig",
      username: "smigz",
      password: hashedPw,
    },
  });

  console.log(user);
}

setup();
