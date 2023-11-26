import { Router } from "express";
import { prisma } from ".";
import { Prisma } from "@prisma/client";

export const usersRouter = Router();

interface UsersProps {
  UserID: number,
  AddressID?: number,
    Street?: string | undefined,
    City?: string | undefined,
    ZipCode?: string | null,
  UserName: string,
  Email: string,
  PhoneNumber?: string
}

usersRouter.get('/', async (req, res) => {
  try {
    res.json(await prisma.users.findMany())
  }
  catch (e: unknown) {
    res.json(e)
    res.sendStatus(500)
  }
})

usersRouter.post('/', async (req, res) => {
  try {
    const body: UsersProps = req.body
    const addresses = await prisma.addresses.findMany( {
      where: {
        AddressID: body.AddressID
      }
    })
    const found = addresses.some(item => item.AddressID === body.AddressID)
    let users: Prisma.UsersCreateInput;
    if(body.AddressID && found) {
      users = {
        UserID: body.UserID,
        UserName: body.UserName,
        Email: body.Email,
        PhoneNumber: body.PhoneNumber || null,
        Addresses: {
          connect: {
            AddressID: body.AddressID
          }
        }
      }
    }
    else if(body.AddressID && !found) {
      users = {
        UserID: body.UserID,
        UserName: body.UserName,
        Email: body.Email,
        PhoneNumber: body.PhoneNumber || null,
        Addresses: {
          create: {
            AddressID: body.AddressID,
            Street: body.Street as string,
            City: body.City as string,
            ZipCode: body.ZipCode
          }
        }
      }
    }
    else {
      users = {
        UserID: body.UserID,
        UserName: body.UserName,
        Email: body.Email,
        PhoneNumber: body.PhoneNumber || undefined,
      }
    }
    // res.json(users)
    res.json(await prisma.users.create({data: users}))
  }
  catch (e: unknown) {
    res.send(e)
  }
})

usersRouter.patch('/', async (req, res) => {
  try {
    const body: UsersProps = req.body
    if(body.UserID && body.UserID > 0) {
      const addresses = await prisma.addresses.findMany( {
        where: {
          AddressID: body.AddressID
        }
      })
      const found = addresses.some(item => item.AddressID === body.AddressID)
      if(body.AddressID && found) {
        res.json(await prisma.users.update({
          where: {
            UserID: body.UserID
          },
          data: {
            UserName: body.UserName || undefined,
            Email: body.Email || undefined,
            PhoneNumber: body.PhoneNumber || undefined,
            Addresses: {
              connect: {
                AddressID: body.AddressID
              }
            }
          }
        }))
      }
      else if (body.AddressID && !found) {
        res.json(await prisma.users.update({
          where: {
            UserID: body.UserID
          },
          data: {
            UserName: body.UserName || undefined,
            Email: body.Email || undefined,
            PhoneNumber: body.PhoneNumber || undefined,
            Addresses: {
              create: {
                AddressID: body.AddressID,
                Street: body.Street as string,
                City: body.City as string,
                ZipCode: body.ZipCode || undefined
              }
            }
          }
        }))
      }
      else {
        res.json(await prisma.users.update({
          where: {
            UserID: body.UserID
          },
          data: {
            UserName: body.UserName || undefined,
            Email: body.Email || undefined,
            PhoneNumber: body.PhoneNumber || undefined
          }
        }))
      }
    }
    else
      throw Error
    }
  catch(e: unknown) {
    res.sendStatus(500)
  }
})


usersRouter.delete('/', async (req, res) => {
  try {
    const body: UsersProps = req.body
    if (body.UserID && body.UserID > 0) {
      await prisma.orders.deleteMany({
        where: {
          UserID: body.UserID
        }
      })
      res.json(await prisma.users.delete({
        where: {
          UserID: body.UserID
        }
      }))
    }
  else throw Error
  }
  catch(e: unknown) {
    res.sendStatus(500)
  }
})
