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
exports.ordersRouter = void 0;
const express_1 = require("express");
const _1 = require(".");
exports.ordersRouter = (0, express_1.Router)();
exports.ordersRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield _1.prisma.orders.findMany());
    }
    catch (e) {
        res.json(e);
        res.sendStatus(500);
    }
}));
exports.ordersRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let body = req.body;
        const orders = {
            OrderID: body.OrderID,
            UserID: body.UserID,
            OrderDate: body.OrderDate,
            OrderDetails: {
                createMany: {
                    data: body.OrderDetails
                }
            }
        };
        res.json(yield _1.prisma.orders.create({ data: orders }));
    }
    catch (e) {
        res.sendStatus(500);
    }
}));
exports.ordersRouter.patch('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        if (body.OrderID && body.OrderID > 0) {
            res.json(yield _1.prisma.orders.update({
                where: {
                    OrderID: body.OrderID
                },
                data: {
                    OrderDate: body.OrderDate
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
exports.ordersRouter.delete('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        if (body.OrderID && body.OrderID > 0) {
            yield _1.prisma.orderDetails.deleteMany({
                where: {
                    OrderID: body.OrderID
                }
            });
            res.json(yield _1.prisma.orders.delete({
                where: {
                    OrderID: body.OrderID
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
