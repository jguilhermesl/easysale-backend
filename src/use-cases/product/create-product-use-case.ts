import { productDAO } from "@/DAO/product"

interface CreateProductUseCaseProps {
  companyId: string
}

export class CreateProductUseCase {
  async execute({ companyId }: CreateProductUseCaseProps) {
    await productDAO.create({})
  }
}
