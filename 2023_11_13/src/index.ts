import express, { Express, Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { APIRouter } from './routes/api';
import { PrismaClient } from '@prisma/client';
import { MongoClient } from 'mongodb';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

export const prisma = new PrismaClient();
// brak hasła bo tak stwierdziłem
export const mongoUrl = "mongodb+srv://kubuszrama:<password>@cluster0.grfoxwg.mongodb.net/?retryWrites=true&w=majority"

app.use('/public', express.static(path.join(__dirname, '..' ,'public')))
app.use(express.urlencoded({ extended: true }))
app.use('/api', APIRouter);

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../src/content/html', "index.html"));
});

app.get('/kontakt', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../src/content/html', "contact.html"));
});

app.post('/kontakt', async (req: Request, res: Response) => {
  const body = req.body;
  console.log(body);

  try {
    const db = await MongoClient.connect(mongoUrl)
    const dbo = await db.db("nodedb")
    if(body.name === "") delete body.name
    try {
      await dbo.collection("contact").insertOne(body)
    } catch (e) {
      throw e
    }
    await db.close()
  } catch (e) {
    throw e
  }
  res.redirect(302, '/');
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});