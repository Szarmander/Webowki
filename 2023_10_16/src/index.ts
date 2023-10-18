import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use('/public', express.static(path.join(__dirname, '..' ,'public')))



app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../src/content', "index.html"));
});

app.get('/kontakt', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../src/content', "contact.html"));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});