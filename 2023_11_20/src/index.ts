import express, { Express } from 'express';
import dotenv from 'dotenv';
import { addressesRouter, orderDetailsRouter, ordersRouter, productsRouter, reviewsRouter, usersRouter } from './routers';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use('/addresses', addressesRouter)
app.use('/users', usersRouter)
app.use('/products', productsRouter)
app.use('/reviews', reviewsRouter)
app.use('/orders', ordersRouter)
app.use('/orderDetails', orderDetailsRouter)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});