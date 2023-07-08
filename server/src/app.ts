import express from "express";
import mainRouter from "./routes/mainRoutes";
import path from "path";
import cors from "cors";
const server = express();
server.use(cors());
server.use("/public", express.static(path.join(__dirname, "../public")));
server.use(mainRouter);
export default server;
