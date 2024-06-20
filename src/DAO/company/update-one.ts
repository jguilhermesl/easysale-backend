import prismaClient from "@/services/prisma";
import { Prisma } from "@prisma/client";

export const updateOne = async (id: string, data: Prisma.CompanyUpdateInput) => {
  return await prismaClient.company.update({
    where: {
      id
    },
    data
  });
};
