import express, { Application } from "express";
import { handleErrors } from "./error";
import "express-async-errors";
import { userRoutes, loginRoutes } from "./routes";
import morgan from "morgan";
import "dotenv/config";
import { scoreRoutes } from "./routes/score.routes";
import { profileRoutes } from "./routes/profile.routes";

const app: Application = express();
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const cors = require("cors");
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.use(cors());
app.use("/profile", profileRoutes);
app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/scores", scoreRoutes);
app.use(handleErrors);

export default app;
