
import { Prisma } from '@prisma/client';
import prismaClient from "@/services/prisma";

export const findMany = async (where: Prisma.ProductWhereInput, include?: Prisma.ProductInclude) => {
  return await prismaClient.product.findMany({
    where,
    include,
    orderBy: {
      createdAt: "desc"
    }
  });
};
  