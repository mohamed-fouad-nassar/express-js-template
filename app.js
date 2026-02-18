import cors from "cors";
import morgan from "morgan";
import express from "express";
import cookieParser from "cookie-parser";

import { notFound, error } from "./middlewares/index.js";

const app = express();

// Default Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes

// Error and Not Found Middlewares
app.use(notFound);
app.use(error);

export default app;
