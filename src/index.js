import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { initDB } from "./db";
import { userRouter } from "./user";

export const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => res.status(200).json({ message: "Welcome to the home" }));
app.use("/user", userRouter);

app.listen(PORT, () => console.log(`app started at ${PORT}`));

initDB();