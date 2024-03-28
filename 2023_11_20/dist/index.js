"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routers_1 = require("./routers");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // Add PATCH method to the list of allowed methods
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
    next();
});
app.use("/addresses", routers_1.addressesRouter);
app.use("/users", routers_1.usersRouter);
app.use("/products", routers_1.productsRouter);
app.use("/reviews", routers_1.reviewsRouter);
app.use("/orders", routers_1.ordersRouter);
app.use("/orderDetails", routers_1.orderDetailsRouter);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
