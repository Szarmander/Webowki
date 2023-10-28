"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const api_1 = require("./routes/api");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use('/public', express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api', api_1.APIRouter);
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../src/content/html', "index.html"));
});
app.get('/kontakt', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../src/content/html', "contact.html"));
});
app.post('/kontakt', (req, res) => {
    const body = req.body;
    console.log(body);
    res.redirect(302, '/');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
