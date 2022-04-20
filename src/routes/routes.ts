import { Router } from "express";
import * as UserController from "../controllers/userControllers";

const routes = Router();

routes.get("/", UserController.showUsers);
routes.get("/user/:id/remove", UserController.removeUsers);
routes.get("/user/:id/update", UserController.updateUsers);

export default routes;
