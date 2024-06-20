
import prismaClient from "@/services/prisma";
import { Prisma } from "@prisma/client";

export const updateOne = async (id: string, data: Prisma.ProductUpdateInput) => {
  return await prismaClient.product.update({
    where: {
      id
    },
    data
  });
};
