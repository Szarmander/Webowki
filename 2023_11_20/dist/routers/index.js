"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = exports.orderDetailsRouter = exports.ordersRouter = exports.reviewsRouter = exports.productsRouter = exports.usersRouter = exports.addressesRouter = void 0;
const client_1 = require("@prisma/client");
var addresses_1 = require("./addresses");
Object.defineProperty(exports, "addressesRouter", { enumerable: true, get: function () { return addresses_1.addressesRouter; } });
var users_1 = require("./users");
Object.defineProperty(exports, "usersRouter", { enumerable: true, get: function () { return users_1.usersRouter; } });
var products_1 = require("./products");
Object.defineProperty(exports, "productsRouter", { enumerable: true, get: function () { return products_1.productsRouter; } });
var reviews_1 = require("./reviews");
Object.defineProperty(exports, "reviewsRouter", { enumerable: true, get: function () { return reviews_1.reviewsRouter; } });
var orders_1 = require("./orders");
Object.defineProperty(exports, "ordersRouter", { enumerable: true, get: function () { return orders_1.ordersRouter; } });
var orderDetails_1 = require("./orderDetails");
Object.defineProperty(exports, "orderDetailsRouter", { enumerable: true, get: function () { return orderDetails_1.orderDetailsRouter; } });
exports.prisma = new client_1.PrismaClient();