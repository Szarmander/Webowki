import { Router } from "express";
import mongoose from "mongoose";
import { Review } from "../mongoose";

export const reviewsRouter = Router();

reviewsRouter.post('/', async (req, res) => {
  try {
    mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost:27017/")
      const body = req.body;
      const review = new Review(body)
      res.json(await review.save());
  }
  catch(e: unknown) {
    // res.json(e)
    res.sendStatus(500)
  }
})
