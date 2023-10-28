import { Router } from "express";
import { students } from "../../public/API/students";
import { subjects } from "../../public/API/subjects";

const router = Router();

interface ILinksProps {
  link: string,
  description: string
}

const links: ILinksProps[] = [
  {
    link: "127.0.0.1:3000/api/students",
    description: "Lista studentów"
  },
  {
    link: "127.0.0.1:3000/api/subjects",
    description: "Lista przedmiotów szkolnych"
  },
]

router.get('/', (req, res) => {
  res.json(links);
})

router.get('/students', (req, res) => {
  res.json(students);
})

router.get('/students/:id', (req, res) => {
  if(students.length >= Number(req.params.id)) {
    res.json(students.find(x => x.id.toString() === req.params.id));
  }
  else {
    res.sendStatus(404);
    return 0;
  }
  
})

router.get('/subjects', (req, res) => {
  res.json(subjects);
})

router.get('/subjects/:id', (req, res) => {
  if(subjects.length >= Number(req.params.id)) {
    res.json(subjects.find(x => x.id.toString() === req.params.id));
  }
  else {
    res.sendStatus(404);
    return 0;
  }
})


export {router as APIRouter}