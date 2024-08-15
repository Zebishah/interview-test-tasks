import express from "express";
import bodyParser from "body-parser";
import { createServer } from "http";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import cors from "cors";
import BookRoutes from "./Routes/Book-Routes.js";

const DB = process.env.MONGOURI;
const app = express();
const server = createServer(app);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const port = process.env.PORT || 5000;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });

app.use("/Book", BookRoutes);

app.get("/", (req, res) => {
  res.json({ message: "hey brother" });
});

server.listen(port, () => {
  console.log(`Server is Listening at Port ${port}`);
});

export default app;
