import prismaClient from "@/services/prisma"

export const findById = async (id: string) => {
  return await prismaClient.category.findUnique({
    where: {
      id: id
    }
  })
}