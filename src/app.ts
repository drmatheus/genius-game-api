import express, { Application } from "express";
import { handleErrors } from "./error";
import "express-async-errors";
import { userRoutes, loginRoutes } from "./routes";

const app: Application = express();
app.use(express.json({ limit: "10mb" }));

app.use("/users", userRoutes);
app.use("/login", loginRoutes);

app.use(handleErrors);

export default app;
