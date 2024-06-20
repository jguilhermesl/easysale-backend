
import prismaClient from "@/services/prisma";
import { Prisma } from "@prisma/client";

export const create = async (data: Prisma.ProductCreateInput) => {
  return await prismaClient.product.create({
    data
  });
};
