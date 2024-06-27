import { Request, Response } from "express";
import { DeleteProductUseCase } from '@/use-cases/./product/delete-product-use-case';
import { handleErrors } from '@/utils/handle-errors';

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { sub } = req.userState;

    const useCase = new DeleteProductUseCase();
    await useCase.execute({ sub })

    return res.status(200).send({});
  } catch (err: any) {
    const errorMessage = handleErrors(err)

    return res.status(500).send({ message: errorMessage });
  }
}
