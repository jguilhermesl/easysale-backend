
import { Prisma } from '@prisma/client';
import prismaClient from "@/services/prisma";

export const findMany = async (where: Prisma.CategoryWhereInput, include?: Prisma.CategoryInclude) => {
  return await prismaClient.category.findMany({
    where,
    include,
    orderBy: {
      createdAt: "desc"
    }
  });
};
