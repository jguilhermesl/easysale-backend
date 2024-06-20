import prismaClient from "@/services/prisma"

export const findById = async (id: string) => {
  return await prismaClient.company.findUnique({
    where: {
      id: id
    }
  })
}