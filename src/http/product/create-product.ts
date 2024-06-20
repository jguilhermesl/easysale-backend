import { Request, Response } from "express";
import { CreateProductUseCase } from '@/use-cases/./product/create-product-use-case';
import { handleErrors } from '@/utils/handle-errors';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { companyId } = req.userState;

    const useCase = new CreateProductUseCase();
    await useCase.execute({ companyId })

    return res.status(200).send({});
  } catch (err: any) {
    const errorMessage = handleErrors(err)

    return res.status(500).send({ message: errorMessage });
  }

}
