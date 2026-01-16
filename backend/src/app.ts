import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import { scalarDocs } from "./config/scalar.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
    
app.use("/docs", scalarDocs);
app.use("/api", routes);
app.use(errorHandler);

export default app;
