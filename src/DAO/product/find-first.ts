
import { Prisma } from '@prisma/client';
import prismaClient from "@/services/prisma";

export const findFirst = async (where: Prisma.ProductWhereInput, include?: Prisma.ProductInclude) => {
  return await prismaClient.product.findFirst({
    where,
    include
  });
};
  