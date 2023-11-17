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
exports.APIRouter = void 0;
const express_1 = require("express");
const __1 = require("..");
const router = (0, express_1.Router)();
exports.APIRouter = router;
const links = [
    {
        link: "127.0.0.1:3000/api/students",
        description: "Lista studentów"
    },
    {
        link: "127.0.0.1:3000/api/subjects",
        description: "Lista przedmiotów szkolnych"
    },
];
router.get('/', (req, res) => {
    res.json(links);
});
router.get('/students', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getStudents = yield __1.prisma.students.findMany();
    res.json(getStudents);
}));
router.get('/students/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getUniqueStudents = yield __1.prisma.students.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });
    if (getUniqueStudents)
        res.json(getUniqueStudents);
    else {
        res.sendStatus(404);
        return 0;
    }
}));
router.get('/subjects', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getSubjects = yield __1.prisma.subjects.findMany();
    res.json(getSubjects);
}));
router.get('/subjects/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getUniqueSubjects = yield __1.prisma.subjects.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });
    if (getUniqueSubjects)
        res.json(getUniqueSubjects);
    else {
        res.sendStatus(404);
        return 0;
    }
}));
