import { categoryDAO } from "@/DAO/category"

interface CreateCategoryUseCaseProps {
  sub: string
  isActive: boolean
  name: string
}

export class CreateCategoryUseCase {
  async execute({ sub, name, isActive }: CreateCategoryUseCaseProps) {
    try {
      await categoryDAO.create({
        name,
        isActive,
        company: {
          connect: {
            id: sub
          }
        }
      })

      return
    } catch (err: any) {
      throw new Error(err.message)
    }
  }
}
