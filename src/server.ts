import express from "express";
import path from "path";
import dotenv from "dotenv";
import mustache from "mustache-express";
import { mongoConnect } from "./databases/mongo";
import routes from "./routes/routes";

dotenv.config();

mongoConnect();

const server = express();

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "./views"));
server.engine("mustache", mustache());

server.use(express.static(path.join(__dirname, "../public")));

server.use(routes);

server.listen(process.env.PORT);
