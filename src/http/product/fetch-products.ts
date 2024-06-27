import { Request, Response } from "express";
import { FetchProductsUseCase } from '@/use-cases/./product/fetch-products-use-case';
import { handleErrors } from '@/utils/handle-errors';

export const fetchProducts = async (req: Request, res: Response) => {
  try {
    const { sub } = req.userState;

    const useCase = new FetchProductsUseCase();
    const { products } = await useCase.execute({ sub })

    return res.status(200).send({ data: products });
  } catch (err: any) {
    const errorMessage = handleErrors(err)

    return res.status(500).send({ message: errorMessage });
  }

}
