"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mysql_1 = require("mysql");
exports.connection = (0, mysql_1.createConnection)({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node'
});
