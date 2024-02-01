import express from "express";
import { port, mongoDbUrl } from "./config.js";
import mongoose from "mongoose";
import { Category } from "./models/Category.js";

const app = express();

app.use(express.json());

app.post("/category", async (request, response) => {
  try {
    const { title } = request.body;

    const category = await Category.create({ title: title });

    response.status(201).send(category);
  } catch (err) {
    console.log(err.message);
    response.status(500).send({ message: err.message });
  }
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
