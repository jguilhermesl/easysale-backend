import prismaClient from "@/services/prisma";
import { Prisma } from "@prisma/client";

export const updateOne = async (id: string, data: Prisma.CategoryUpdateInput) => {
  return await prismaClient.category.update({
    where: {
      id
    },
    data
  });
};
