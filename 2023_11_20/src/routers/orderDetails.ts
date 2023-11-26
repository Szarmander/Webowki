import { Router } from "express";
import { prisma } from ".";
import { Prisma } from "@prisma/client";

interface OrderDetailsProps {
  OrderDetailID?: number,
  Quantity: number,
  OrderID: number,
  OrderDate: Date,
  UserID: number,
  ProductID: number
}

export const orderDetailsRouter = Router();

orderDetailsRouter.get('/', async (req, res) => {
  try {
    res.json(await prisma.orderDetails.findMany())
  }
  catch (e: unknown) {
    res.json(e)
    res.sendStatus(500)
  }
})

orderDetailsRouter.post('/', async (req, res) => {
  try {
    let body: OrderDetailsProps = req.body
    const orderDetails: Prisma.OrderDetailsCreateInput = {
      Quantity: body.Quantity,
      Orders: {
        connectOrCreate: {
          where: {
            OrderID: body.OrderID,
          },
          create: {
            OrderID: body.OrderID,
            OrderDate: body.OrderDate,
            UserID: body.UserID
          }
        },
      },
      Products: {
        connect: {
          ProductID: body.ProductID
        }
      }
    }
    res.json(await prisma.orderDetails.create({data:orderDetails}))
  }
  catch (e: unknown) {
    res.sendStatus(500)
  }
})

orderDetailsRouter.patch('/', async (req, res) => {
  try {
    const body: OrderDetailsProps = req.body
    if(body.OrderDetailID && body.OrderDetailID > 0 ) {
      res.json(await prisma.orderDetails.update({
        where: {
          OrderDetailID: body.OrderDetailID,
        },
        data: {
          Quantity: body.Quantity
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


orderDetailsRouter.delete('/', async (req, res) => {
  try {
    const body: OrderDetailsProps = req.body
    if(body.OrderDetailID && body.OrderDetailID > 0) {
      res.json(await prisma.orderDetails.delete({
        where: {
          OrderDetailID: body.OrderDetailID
        }
      }))
    }
  else throw Error
  }
  catch(e: unknown) {
    res.sendStatus(500)
  }
})