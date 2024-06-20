import prismaClient from "@/services/prisma";
import { Prisma } from "@prisma/client";

export const create = async (data: Prisma.CompanyCreateInput) => {
  return await prismaClient.company.create({
    data
  });
};
