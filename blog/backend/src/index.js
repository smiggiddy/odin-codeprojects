import cors from "cors";
import express from "express";
import { blogRouter } from "./routers/blogRouter";
import { authRouter } from "./routers/authRouter";

const app = express();

const port = process.env.NODE_PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`INFO: ${req.method} ${req.path} ${req.ip}`);
  next();
});

app.get("/", (req, res) => {
  res.status(200).json({ status: "ok" });
});
app.use("/posts", blogRouter);
app.use("/auth", authRouter);

app.use((req, res) => res.status(404).json({ error: "not found" }));

app.listen(port, () => {
  console.log(`Webserver running on port ${port} `);
});
