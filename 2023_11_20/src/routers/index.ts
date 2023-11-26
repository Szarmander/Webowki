import { PrismaClient } from "@prisma/client";

export { addressesRouter } from "./addresses";
export { usersRouter } from "./users"
export { productsRouter } from "./products"
export { reviewsRouter } from "./reviews"
export { ordersRouter } from "./orders"
export { orderDetailsRouter } from "./orderDetails"


export const prisma = new PrismaClient()