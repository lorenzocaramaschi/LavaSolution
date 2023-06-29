import express, { json, urlencoded } from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "./config/config.js";
import router from "./routes/index.js";

const app = express();
const PORT = config.PORT || 3001;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use("/", router);

await mongoose.connect(config.DB);

console.log("Succesfully connected to MongoDB!");

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error initializing server ${JSON.stringify(err)}`);
  }

  console.log(`Server listening port: ${PORT}`);
});
