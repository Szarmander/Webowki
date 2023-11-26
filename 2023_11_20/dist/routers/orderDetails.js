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
exports.orderDetailsRouter = void 0;
const express_1 = require("express");
const _1 = require(".");
exports.orderDetailsRouter = (0, express_1.Router)();
exports.orderDetailsRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield _1.prisma.orderDetails.findMany());
    }
    catch (e) {
        res.json(e);
        res.sendStatus(500);
    }
}));
exports.orderDetailsRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let body = req.body;
        const orderDetails = {
            Quantity: body.Quantity,
            Orders: {
                connectOrCreate: {
                    where: {
                        OrderID: body.OrderID,
                    },
                    create: {
                        OrderID: body.OrderID,
                        OrderDate: body.OrderDate,
                        UserID: body.UserID
                    }
                },
            },
            Products: {
                connect: {
                    ProductID: body.ProductID
                }
            }
        };
        res.json(yield _1.prisma.orderDetails.create({ data: orderDetails }));
    }
    catch (e) {
        res.sendStatus(500);
    }
}));
exports.orderDetailsRouter.patch('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        if (body.OrderDetailID && body.OrderDetailID > 0) {
            res.json(yield _1.prisma.orderDetails.update({
                where: {
                    OrderDetailID: body.OrderDetailID,
                },
                data: {
                    Quantity: body.Quantity
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
exports.orderDetailsRouter.delete('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        if (body.OrderDetailID && body.OrderDetailID > 0) {
            res.json(yield _1.prisma.orderDetails.delete({
                where: {
                    OrderDetailID: body.OrderDetailID
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
