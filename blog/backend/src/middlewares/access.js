import jwt from "jsonwebtoken";

import { secretKey } from "../routers/authRouter";

function verifyTokenHeader(req, res, next) {
  const bearer = req.headers["authorization"];

  if (typeof bearer !== "undefined") {
    const token = bearer.split(" ")[1];
    req.token = token;
    next();
  } else {
    res.json({ error: "Unauthorized" }).status(403);
  }
}

function authorizedOnly(req, res, next) {
  jwt.verify(req.token, secretKey, (err) => {
    if (err) {
      res.json({ error: "Unauthorized" }).status(403);
    }
    next();
  });
}

export { verifyTokenHeader, authorizedOnly };
