import mongoose from "mongoose";
import app from "./app";
import "dotenv/config";

mongoose
  .connect(process.env.DATABASE_URL!)
  .then(() => {
    console.log("Database conected");
    app.listen(3000, () => console.log("App started"));
  })
  .catch((e) => {
    console.log(e);
  });
