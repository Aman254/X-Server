import mongoose from "mongoose";
import app from "./app.js";
import logger from "./Configs/logger.config.js";

//Environment variavles
const { MONGODB_URL } = process.env;
const PORT = process.env.PORT || 8000;

mongoose.connection.on("error", (err) => {
  logger.error(`Error in connecting to Mongodb:${err}`);
  process.exit(1);
});

mongoose.connect(MONGODB_URL, {}).then(() => {
  logger.info("Connected to MongoDB:");
});

app.get("/", (req, res) => {
  res.send("Hello");
});
let server;
server = app.listen(PORT, () => {
  logger.info(`App Running on Port: ${PORT}`);
});

const existHandler = () => {
  if (server) {
    logger.info("Server Closed.");
    process.exit(1);
  } else {
    process.exit(1);
  }
};

const uncaughtErrorHandler = (error) => {
  logger.error(error);
  existHandler();
};

process.on("uncaughtException", uncaughtErrorHandler);

//SIGTERM
process.on("SIGTERM", () => {
  logger.info("Server Closed.");
  process.exit(1);
});
