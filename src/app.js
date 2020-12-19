import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
import Pen from "../models/Pen";
import mongoose from "mongoose";
import globalRouter from "./router/globalRouter";


const app = express();
const PORT = process.env.PORT;

app.set("view engine", "pug");



app.use(morgan(`dev`));



app.use("/", globalRouter);


app.listen(PORT, (req, res) => {
    console.log(`${PORT} SEVER START`);
});