"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIRouter = void 0;
const express_1 = require("express");
const students_1 = require("../../public/API/students");
const subjects_1 = require("../../public/API/subjects");
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
router.use((req, res, next) => {
    console.log('chuj');
    next();
});
router.get('/students', (req, res) => {
    res.json(students_1.students);
});
router.get('/students/:id', (req, res) => {
    res.json(students_1.students.find(x => x.id.toString() === req.params.id));
});
router.get('/subjects', (req, res) => {
    res.json(subjects_1.subjects);
});
router.get('/subjects/:id', (req, res) => {
    res.send(subjects_1.subjects.length);
    // if(subjects.length >= Number(req.params.id)) {
    //   res.json(subjects.find(x => x.id.toString() === req.params.id) || "404 wypierdzielaj");
    //   console.log("działa")
    // }
    // else {
    //   console.log("i chuj")
    //   res.sendStatus(404);
    //   return 0;
    // }
});
router.get('/', (req, res) => {
    res.json(links);
    // res.send("dupa api")
});
