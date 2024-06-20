import { Prisma } from '@prisma/client';
import prismaClient from "@/services/prisma";

export const findFirst = async (where: Prisma.CompanyWhereInput, include?: Prisma.CompanyInclude) => {
  return await prismaClient.company.findFirst({
    where,
    include
  });
};
