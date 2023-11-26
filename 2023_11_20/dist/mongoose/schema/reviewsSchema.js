"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewsSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const reviewsSchema = new mongoose_1.default.Schema({
    rating: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        default: ""
    }
});
exports.reviewsSchema = reviewsSchema;
