import { Router } from "express";
import { prisma } from ".";
import { Prisma } from "@prisma/client";

interface AddressesProps {
  AddressID: number,
  UserID?: number,
  Street: string,
  City: string,
  ZipCode?: string
}

export const addressesRouter = Router();

addressesRouter.get('/', async (req, res) => {
  try {
    res.json(await prisma.addresses.findMany())
  }
  catch (e: unknown) {
    res.json(e)
    res.sendStatus(500)
  }
})

addressesRouter.post('/', async (req, res) => {
  try {
    const body: AddressesProps = req.body
    const users = await prisma.users.findMany( {
      where: {
        UserID: body.UserID
      }
    })
    const found = users.some(item => item.UserID === body.UserID)
    let addresses: Prisma.AddressesCreateInput | Prisma.AddressesUncheckedCreateInput;
    if (found) {
      addresses  = {
        AddressID: body.AddressID,
        Street: body.Street as string,
        City: body.City as string,
        ZipCode: body.ZipCode || undefined,
        Users: {
          connect: {
            UserID: body.UserID
          }
        }
      }
    }
    else {
      addresses = {
        AddressID: body.AddressID,
        Street: body.Street as string,
        City: body.City as string,
        ZipCode: body.ZipCode,
      }
    }
    res.json(await prisma.addresses.create({data: addresses}))
  }
  catch (e: unknown) {
    res.sendStatus(500)
  }
})

addressesRouter.patch('/', async (req, res) => {
  try {
    const body: AddressesProps = req.body
    if(body.AddressID && body.AddressID > 0) {
      res.json(await prisma.addresses.update({
        where: {
          AddressID: body.AddressID
        },
        data: {
          Street: body.Street || undefined,
          City: body.City || undefined,
          ZipCode: body.ZipCode || undefined,
          UserID: body.UserID || undefined
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

addressesRouter.delete('/', async (req, res) => {
  try {
    const body: AddressesProps = req.body
    if(body.AddressID && body.AddressID > 0)
    res.json(await prisma.addresses.delete({
      where: {
        AddressID: body.AddressID
      }
    }))
  else if (body.UserID && body.UserID > 0)
    res.json(await prisma.addresses.delete({
      where: {
        UserID: body.UserID
      }
    }))
  else throw Error
  }
  catch(e: unknown) {
    res.sendStatus(500)
  }
})


