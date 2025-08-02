import express from "express";
import { blogRouter } from "./routers/blogRouter";
import { authRouter } from "./routers/authRouter";

const app = express();
const port = process.env.NODE_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ status: "ok" }).status(200);
});
app.use("/posts", blogRouter);
app.use("/auth", authRouter);

app.use((req, res) => res.status(404).json({ error: "not found" }));

app.listen(port, () => {
  console.log(`Webserver running on port ${port} `);
});
