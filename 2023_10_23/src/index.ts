import express, { Express, Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { APIRouter } from './routes/api';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use('/public', express.static(path.join(__dirname, '..' ,'public')))
app.use(express.urlencoded({ extended: true }))
app.use('/api', APIRouter);

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../src/content/html', "index.html"));
});

app.get('/kontakt', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../src/content/html', "contact.html"));
});

app.post('/kontakt', (req: Request, res: Response) => {
  const body = req.body;
  console.log(body);
  res.redirect(302, '/');
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});