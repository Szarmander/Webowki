import { Router } from "express";
import { mongoUrl, prisma } from "..";
import { MongoClient } from "mongodb";

const router = Router();

interface ILinksProps {
  link: string,
  description: string
}

interface prismaStudents {
  id: number,
  name: string,
  surname: string,
  email: string
}

interface prismaSubjects {
  id: number,
  name: string,
  hoursAWeek: number
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

router.get('/students', async (req, res) => {
  const getStudents: prismaStudents[] | null = await prisma.students.findMany();
  res.json(getStudents);
})

router.get('/students/:id', async (req, res) => {
  const getUniqueStudents: prismaStudents | null = await prisma.students.findUnique({
    where: {
      id: Number(req.params.id)
    }
  });
  if(getUniqueStudents) res.json(getUniqueStudents);
  else {
    res.sendStatus(404);
    return 0;
  }
})

router.get('/subjects', async (req, res) => {
  const getSubjects: prismaSubjects[] | null = await prisma.subjects.findMany();
  res.json(getSubjects);
})

router.get('/subjects/:id', async (req, res) => {
  const getUniqueSubjects: prismaSubjects | null = await prisma.subjects.findUnique({
    where: {
      id: Number(req.params.id)
    }
  });
  if(getUniqueSubjects) res.json(getUniqueSubjects);
  else {
    res.sendStatus(404);
    return 0;
  }
})

router.get('/messages', async (req, res) => {
  try {
    const db = await MongoClient.connect(mongoUrl)
    const dbo = await db.db("nodedb")
    try {
      const result = await dbo.collection("contact").find().toArray()
      res.json(result)
    } catch (e) {
      throw e
    }
    await db.close()
    } catch (e) {
      throw e
    }
})

export {router as APIRouter}