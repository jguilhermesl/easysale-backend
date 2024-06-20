
import prismaClient from "@/services/prisma";

export const deleteOne = async (id: string) => {
  return await prismaClient.product.delete({
    where: {
      id
    },
  });
};
  