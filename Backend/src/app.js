import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import routes from "./Routes/index.js";
import createHttpError from "http-errors";
//Dotenv Configuration
dotenv.config();

const app = express();

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(helmet());

app.use(express.json());

app.use(mongoSanitize());

app.use(cookieParser());

app.use(compression());

app.use("/api/v1", routes);

app.use(cors({ origin: "http://localhost:3000" }));

app.use(async (req, res, next) => {
  next(createHttpError("This Route does not exist."));
});

app.use(async (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status,
      message: err.message,
    },
  });
});

export default app;
