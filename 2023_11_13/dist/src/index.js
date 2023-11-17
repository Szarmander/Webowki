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
exports.prisma = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const api_1 = require("./routes/api");
const client_1 = require("@prisma/client");
const mongodb_1 = require("mongodb");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
exports.prisma = new client_1.PrismaClient();
app.use('/public', express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api', api_1.APIRouter);
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../src/content/html', "index.html"));
});
app.get('/kontakt', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../src/content/html', "contact.html"));
});
app.post('/kontakt', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    console.log(body);
    const url = "mongodb://localhost:27017/nodedb";
    try {
        const db = yield mongodb_1.MongoClient.connect(url);
        console.log("Database created!");
        yield db.close();
    }
    catch (e) {
        throw e;
    }
    res.redirect(302, '/');
}));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
