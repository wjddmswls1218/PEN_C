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

mongoose.connect(
    `mongodb://4leaf:fourleaf0309@210.114.1.127:27017/admin`,
    {
        dbName: `JEJ_PRA`,
        useNewUrlparser: true,
        useCreateIndex: true,
    },
    (error) => {
        if (error) {
            console.log("XXXXXXXX");
        } else {
            console.log("OOOOOOOO");
        }
    }
);

app.use("/", globalRouter);


app.listen(PORT, (req, res) => {
    console.log(`${PORT} SEVER START`);
});