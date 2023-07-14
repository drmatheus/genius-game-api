import express, { Application } from "express";
import { handleErrors } from "./error";
import "express-async-errors";
import { userRoutes, loginRoutes } from "./routes";
import morgan from "morgan";
import "dotenv/config";
import { scoreRoutes } from "./routes/score.routes";


const app: Application = express();
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/scores", scoreRoutes);
app.use(handleErrors);

export default app;
