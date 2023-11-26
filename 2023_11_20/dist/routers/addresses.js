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
exports.addressesRouter = void 0;
const express_1 = require("express");
const _1 = require(".");
exports.addressesRouter = (0, express_1.Router)();
exports.addressesRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield _1.prisma.addresses.findMany());
    }
    catch (e) {
        res.json(e);
        res.sendStatus(500);
    }
}));
exports.addressesRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const users = yield _1.prisma.users.findMany({
            where: {
                UserID: body.UserID
            }
        });
        const found = users.some(item => item.UserID === body.UserID);
        let addresses;
        if (found) {
            addresses = {
                AddressID: body.AddressID,
                Street: body.Street,
                City: body.City,
                ZipCode: body.ZipCode || undefined,
                Users: {
                    connect: {
                        UserID: body.UserID
                    }
                }
            };
        }
        else {
            addresses = {
                AddressID: body.AddressID,
                Street: body.Street,
                City: body.City,
                ZipCode: body.ZipCode,
            };
        }
        res.json(yield _1.prisma.addresses.create({ data: addresses }));
    }
    catch (e) {
        res.sendStatus(500);
    }
}));
exports.addressesRouter.patch('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        if (body.AddressID && body.AddressID > 0) {
            res.json(yield _1.prisma.addresses.update({
                where: {
                    AddressID: body.AddressID
                },
                data: {
                    Street: body.Street || undefined,
                    City: body.City || undefined,
                    ZipCode: body.ZipCode || undefined,
                    UserID: body.UserID || undefined
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
exports.addressesRouter.delete('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        if (body.AddressID && body.AddressID > 0)
            res.json(yield _1.prisma.addresses.delete({
                where: {
                    AddressID: body.AddressID
                }
            }));
        else if (body.UserID && body.UserID > 0)
            res.json(yield _1.prisma.addresses.delete({
                where: {
                    UserID: body.UserID
                }
            }));
        else
            throw Error;
    }
    catch (e) {
        res.sendStatus(500);
    }
}));
