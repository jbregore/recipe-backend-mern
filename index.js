import express from "express";
import { port, mongoDbUrl } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", async (request, response) => {
  console.log(request);
});

mongoose
  .connect(mongoDbUrl)
  .then(() => {
    console.log("App is connected to the database");
    app.listen(port, () => {
      console.log(`App is Listenening on port: ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
