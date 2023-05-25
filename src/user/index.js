import express from "express";
import { createUser, findAll, findById } from "./user_schema";

export const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  res.status(200).json(await findAll());
});

userRouter.get("/:id", async (req, res) => {
  try {
    const result = await findById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error occured" });
  }
});

userRouter.post("/", async (req, res) => {
  try {
    const createdUser = await createUser(req.body);
    res.status(201).json(createUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error occured" });
  }
});