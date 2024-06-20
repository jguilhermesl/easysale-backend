
import prismaClient from "@/services/prisma";

export const findById = async (id: string) => {
  return await prismaClient.product.findUnique({
    where: {
      id: id
    }
  });
};
  