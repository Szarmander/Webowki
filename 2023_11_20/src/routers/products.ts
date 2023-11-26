import { Router } from "express";
import { prisma } from ".";
import { Prisma } from "@prisma/client";

interface ProductsProps {
  ProductID: number,
  ProductsName: string,
  Price: number
}

export const productsRouter = Router();

productsRouter.get('/', async (req, res) => {
  try {
    res.json(await prisma.products.findMany())
  }
  catch (e: unknown) {
    res.json(e)
    res.sendStatus(500)
  }
})

productsRouter.post('/', async (req, res) => {
  try {
    const body: ProductsProps = req.body
    res.json(await prisma.products.create({data: {
      ProductID: body.ProductID,
      ProductName: body.ProductsName,
      Price: body.Price
    }}))
  }
  catch (e: unknown) {
    res.sendStatus(500)
  }
})

productsRouter.patch('/', async (req, res) => {
  try {
    const body: ProductsProps = req.body
    if(body.ProductID && body.ProductID > 0) {
      res.json(await prisma.products.update({
        where: {
          ProductID: body.ProductID
        },
        data: {
          ProductName: body.ProductsName || undefined,
          Price: body.Price || undefined
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


productsRouter.delete('/', async (req, res) => {
  try {
    const body: ProductsProps = req.body
    if(body.ProductID && body.ProductID > 0)
    res.json(await prisma.products.delete({
      where: {
        ProductID: body.ProductID
      }
    }))
  else throw Error
  }
  catch(e: unknown) {
    res.sendStatus(500)
  }
})

