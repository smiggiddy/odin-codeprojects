import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getUser } from "../prisma/queries";

const authRouter = Router();
const secretKey = process.env.SECRET_KEY || "secretkey";

authRouter.post("/token", async (req, res) => {
  try {
    console.log("REQ BODY", req.body, req);
    const user = await getUser();
    const username = req.body.username;
    const password = req.body.password;
    const match =
      (await bcrypt.compare(password, user.password)) &&
      username === user.username;

    console.log(`MATCHED: ${match}, ${user}`);
    if (match) {
      const token = jwt.sign({ user }, secretKey);
      res.json({ token }).status(200);
    } else {
      res.json({ error: "invalid username/password" }).status(403);
    }
  } catch (e) {
    console.log("catch", e);
    res.json({ error: "invalid username/password!" }).status(403);
  }
});

export { authRouter, secretKey };
