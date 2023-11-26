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
exports.usersRouter = void 0;
const express_1 = require("express");
const _1 = require(".");
exports.usersRouter = (0, express_1.Router)();
exports.usersRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield _1.prisma.users.findMany());
    }
    catch (e) {
        res.json(e);
        res.sendStatus(500);
    }
}));
exports.usersRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const addresses = yield _1.prisma.addresses.findMany({
            where: {
                AddressID: body.AddressID
            }
        });
        const found = addresses.some(item => item.AddressID === body.AddressID);
        let users;
        if (body.AddressID && found) {
            users = {
                UserID: body.UserID,
                UserName: body.UserName,
                Email: body.Email,
                PhoneNumber: body.PhoneNumber || null,
                Addresses: {
                    connect: {
                        AddressID: body.AddressID
                    }
                }
            };
        }
        else if (body.AddressID && !found) {
            users = {
                UserID: body.UserID,
                UserName: body.UserName,
                Email: body.Email,
                PhoneNumber: body.PhoneNumber || null,
                Addresses: {
                    create: {
                        AddressID: body.AddressID,
                        Street: body.Street,
                        City: body.City,
                        ZipCode: body.ZipCode
                    }
                }
            };
        }
        else {
            users = {
                UserID: body.UserID,
                UserName: body.UserName,
                Email: body.Email,
                PhoneNumber: body.PhoneNumber || undefined,
            };
        }
        // res.json(users)
        res.json(yield _1.prisma.users.create({ data: users }));
    }
    catch (e) {
        res.send(e);
    }
}));
exports.usersRouter.patch('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        if (body.UserID && body.UserID > 0) {
            const addresses = yield _1.prisma.addresses.findMany({
                where: {
                    AddressID: body.AddressID
                }
            });
            const found = addresses.some(item => item.AddressID === body.AddressID);
            if (body.AddressID && found) {
                res.json(yield _1.prisma.users.update({
                    where: {
                        UserID: body.UserID
                    },
                    data: {
                        UserName: body.UserName || undefined,
                        Email: body.Email || undefined,
                        PhoneNumber: body.PhoneNumber || undefined,
                        Addresses: {
                            connect: {
                                AddressID: body.AddressID
                            }
                        }
                    }
                }));
            }
            else if (body.AddressID && !found) {
                res.json(yield _1.prisma.users.update({
                    where: {
                        UserID: body.UserID
                    },
                    data: {
                        UserName: body.UserName || undefined,
                        Email: body.Email || undefined,
                        PhoneNumber: body.PhoneNumber || undefined,
                        Addresses: {
                            create: {
                                AddressID: body.AddressID,
                                Street: body.Street,
                                City: body.City,
                                ZipCode: body.ZipCode || undefined
                            }
                        }
                    }
                }));
            }
            else {
                res.json(yield _1.prisma.users.update({
                    where: {
                        UserID: body.UserID
                    },
                    data: {
                        UserName: body.UserName || undefined,
                        Email: body.Email || undefined,
                        PhoneNumber: body.PhoneNumber || undefined
                    }
                }));
            }
        }
        else
            throw Error;
    }
    catch (e) {
        res.sendStatus(500);
    }
}));
exports.usersRouter.delete('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        if (body.UserID && body.UserID > 0) {
            yield _1.prisma.orders.deleteMany({
                where: {
                    UserID: body.UserID
                }
            });
            res.json(yield _1.prisma.users.delete({
                where: {
                    UserID: body.UserID
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
