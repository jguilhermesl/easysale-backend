import { Request, Response } from "express";
import { CreateCategoryUseCase } from '@/use-cases/./category/create-category-use-case';
import { handleErrors } from '@/utils/handle-errors';

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { companyId } = req.userState;

    const useCase = new CreateCategoryUseCase();
    await useCase.execute({ companyId })

    return res.status(200).send({});
  } catch (err: any) {
    const errorMessage = handleErrors(err)

    return res.status(500).send({ message: errorMessage });
  }

}
