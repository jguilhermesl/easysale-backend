import prismaClient from "@/services/prisma";
import { Prisma } from "@prisma/client";

export const create = async (data: Prisma.CategoryCreateInput) => {
  return await prismaClient.category.create({
    data
  });
};
