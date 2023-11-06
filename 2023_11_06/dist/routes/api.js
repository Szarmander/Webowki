"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIRouter = void 0;
const express_1 = require("express");
const students_1 = require("../API/students");
const subjects_1 = require("../API/subjects");
const router = (0, express_1.Router)();
exports.APIRouter = router;
router.get('/', (req, res) => {
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
    res.json(subjects_1.subjects.find(x => x.id.toString() === req.params.id));
});
