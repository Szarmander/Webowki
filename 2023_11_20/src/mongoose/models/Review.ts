import mongoose from "mongoose";
import { reviewsSchema } from "../schema/reviewsSchema";

export const Review = mongoose.model('Review', reviewsSchema)