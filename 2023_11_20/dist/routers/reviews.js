"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewsRouter = void 0;
const express_1 = require("express");
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("../mongoose");
exports.reviewsRouter = (0, express_1.Router)();
exports.reviewsRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        mongoose_1.default.connect(process.env.MONGODB_URL || "mongodb://localhost:27017/");
        const body = req.body;
        const review = new mongoose_2.Review(body);
        res.json(yield review.save());
    }
    catch (e) {
        // res.json(e)
        res.sendStatus(500);
    }
}));
