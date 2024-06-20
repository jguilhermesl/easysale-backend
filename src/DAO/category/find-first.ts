import { Prisma } from '@prisma/client';
import prismaClient from "@/services/prisma";

export const findFirst = async (where: Prisma.CategoryWhereInput, include?: Prisma.CategoryInclude) => {
  return await prismaClient.category.findFirst({
    where,
    include
  });
};
