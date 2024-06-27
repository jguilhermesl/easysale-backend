import { productDAO } from "@/DAO/product"

interface CreateProductUseCaseProps {
  sub: string,
  name: string,
  isActive: boolean,
  photoUrl: string,
  categoryId: string,
  description: string,
  price: number
}

export class CreateProductUseCase {
  async execute({ sub, name, isActive, photoUrl, categoryId, description, price }: CreateProductUseCaseProps) {
    try {
      await productDAO.create({
        name,
        isActive,
        category: {
          connect: {
            id: categoryId
          }
        },
        company: {
          connect: {
            id: sub
          }
        },
        price,
        photoUrl,
        description
      })

      return
    } catch (err: any) {
      throw new Error(err.message)
    }
  }
}
