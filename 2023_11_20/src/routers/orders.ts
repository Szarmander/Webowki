import { Router } from "express";
import { prisma } from ".";
import { Prisma } from "@prisma/client";

interface OrdersProps {
  OrderID: number,
  UserID?: number,
  OrderDate?: Date,
  OrderDetails?: Prisma.OrderDetailsCreateManyOrdersInput[]
}

export const ordersRouter = Router();

ordersRouter.get('/', async (req, res) => {
  try {
    res.json(await prisma.orders.findMany())
  }
  catch (e: unknown) {
    res.json(e)
    res.sendStatus(500)
  }
})

ordersRouter.post('/', async (req, res) => {
  try {
    let body: OrdersProps = req.body
    const orders: Prisma.OrdersUncheckedCreateInput = {
      OrderID: body.OrderID,
      UserID: body.UserID,
      OrderDate: body.OrderDate,
      OrderDetails: {
        createMany: {
          data: body.OrderDetails as  Prisma.OrderDetailsCreateManyOrdersInput[]
        }
      }
    }
    res.json(await prisma.orders.create({data: orders}))
  }
  catch (e: unknown) {
    res.sendStatus(500)
  }
})

ordersRouter.patch('/', async (req, res) => {
  try {
    const body: OrdersProps = req.body
    if(body.OrderID && body.OrderID > 0) {
      res.json(await prisma.orders.update({
        where: {
          OrderID: body.OrderID
        },
        data: {
          OrderDate: body.OrderDate
        }
      }))
    }
    else
      throw Error
    }
  catch(e: unknown) {
    res.sendStatus(500)
  }
})


ordersRouter.delete('/', async (req, res) => {
  try {
    const body: OrdersProps = req.body
    if(body.OrderID && body.OrderID > 0) {
      await prisma.orderDetails.deleteMany({
        where: {
          OrderID: body.OrderID
        }
      })
      res.json(await prisma.orders.delete({
        where: {
          OrderID: body.OrderID
        }
      }))
    }
  else throw Error
  }
  catch(e: unknown) {
    res.sendStatus(500)
  }
})


