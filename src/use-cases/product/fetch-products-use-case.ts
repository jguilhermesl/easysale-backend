import { productDAO } from "@/DAO/product"

interface FetchProductsUseCaseProps {
  sub: string
}

export class FetchProductsUseCase {
  async execute({ sub }: FetchProductsUseCaseProps) {
    try {
      const products = await productDAO.findMany({ companyId: sub }, { category: true })

      return { products }
    } catch (err: any) {
      throw new Error(err.message)
    }
  }
}
