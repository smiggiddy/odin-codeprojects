import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getUser } from "../prisma/queries";
import { authorizedOnly, verifyTokenHeader } from "../middlewares/access";

const authRouter = Router();
const secretKey = process.env.SECRET_KEY || "secretkey";

authRouter.get("/", verifyTokenHeader, authorizedOnly, async (req, res) => {
  res.status(200).json({ msg: "logged in" });
});
authRouter.post("/token", async (req, res) => {
  try {
    const user = await getUser();
    const username = req.body.username;
    const password = req.body.password;
    const match =
      (await bcrypt.compare(password, user.password)) &&
      username === user.username;

    if (match) {
      const token = jwt.sign({ user }, secretKey);
      res.json({ token }).status(200);
    } else {
      res.json({ error: "invalid username/password" }).status(403);
    }
  } catch {
    res.json({ error: "invalid username/password!" }).status(403);
  }
});

export { authRouter, secretKey };
