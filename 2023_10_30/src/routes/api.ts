import { Router } from "express";
import { students } from "../../public/API/students";
import { subjects } from "../../public/API/subjects";
import { connection } from "../../public/mysql/mysql";
import { FieldInfo, MysqlError, escape } from "mysql";

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
  connection.query("SELECT * FROM students", (err: MysqlError | null, result: any, fields: FieldInfo[] | undefined) => {
    if(err) throw err;
    console.log(result);
    res.json(result);
  })
  
})

router.get('/students/:id', (req, res) => {
  connection.query("SELECT * FROM students WHERE id = " + escape(req.params.id), (err: MysqlError | null, result: any, fields: FieldInfo[] | undefined) => {
    if(err) throw err;
    console.log(result);
    if(result.length > 0) {
      res.json(result);
    }
    else {
      res.sendStatus(404);
      return 0;
    }
  })  
})

router.get('/subjects', (req, res) => {
  connection.query("SELECT * FROM subjects", (err: MysqlError | null, result: any, fields: FieldInfo[] | undefined) => {
    if(err) throw err;
    console.log(result);
    res.json(result);
  })
})

router.get('/subjects/:id', (req, res) => {
  connection.query("SELECT * FROM subjects WHERE id = " + escape(req.params.id), (err: MysqlError | null, result: any, fields: FieldInfo[] | undefined) => {
    if(err) throw err;
    console.log(result);
    if(result.length > 0) {
      res.json(result);
    }
    else {
      res.sendStatus(404);
      return 0;
    }
  })
})


export {router as APIRouter}