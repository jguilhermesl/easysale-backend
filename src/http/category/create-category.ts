import { Request, Response } from "express";
import { CreateCategoryUseCase } from '@/use-cases/./category/create-category-use-case';
import { handleErrors } from '@/utils/handle-errors';
import { z } from "zod";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const createCompanyBodySchema = z.object({
      name: z.string(),
      isActive: z.boolean()
    });

    const { name, isActive } = createCompanyBodySchema.parse(req.body);
    const { sub } = req.userState;

    const useCase = new CreateCategoryUseCase();
    await useCase.execute({ sub, isActive, name })

    return res.status(200).send({ message: "A categoria foi criada com sucesso!" });
  } catch (err: any) {
    const errorMessage = handleErrors(err)

    return res.status(500).send({ message: errorMessage });
  }

}
