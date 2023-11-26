import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    default: ""
  }
})

export {reviewsSchema}