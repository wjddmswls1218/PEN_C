import express from "express";
import { globalController } from "../controller/globalController";

const globalRouter = express.Router();

globalRouter.get("/", globalController.homeController);
globalRouter.get("/pen", globalController.penController);

export default globalRouter;