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
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = require("express");
const _1 = require(".");
exports.productsRouter = (0, express_1.Router)();
exports.productsRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield _1.prisma.products.findMany());
    }
    catch (e) {
        res.json(e);
        res.sendStatus(500);
    }
}));
exports.productsRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        res.json(yield _1.prisma.products.create({ data: {
                ProductID: body.ProductID,
                ProductName: body.ProductsName,
                Price: body.Price
            } }));
    }
    catch (e) {
        res.sendStatus(500);
    }
}));
exports.productsRouter.patch('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        if (body.ProductID && body.ProductID > 0) {
            res.json(yield _1.prisma.products.update({
                where: {
                    ProductID: body.ProductID
                },
                data: {
                    ProductName: body.ProductsName || undefined,
                    Price: body.Price || undefined
                }
            }));
        }
        else
            throw Error;
    }
    catch (e) {
        res.sendStatus(500);
    }
}));
exports.productsRouter.delete('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        if (body.ProductID && body.ProductID > 0)
            res.json(yield _1.prisma.products.delete({
                where: {
                    ProductID: body.ProductID
                }
            }));
        else
            throw Error;
    }
    catch (e) {
        res.sendStatus(500);
    }
}));
