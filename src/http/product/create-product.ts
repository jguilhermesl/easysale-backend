import { Request, Response } from "express";
import { CreateProductUseCase } from '@/use-cases/./product/create-product-use-case';
import { handleErrors } from '@/utils/handle-errors';
import { z } from "zod";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const createProductBodySchema = z.object({
      name: z.string(),
      isActive: z.boolean(),
      photoUrl: z.string(),
      categoryId: z.string(),
      description: z.string(),
      price: z.number()
    });
    const { sub } = req.userState;

    const { name, isActive, photoUrl, categoryId, description, price } = createProductBodySchema.parse(req.body)

    const useCase = new CreateProductUseCase();
    await useCase.execute({ sub, name, isActive, photoUrl, categoryId, description, price })

    return res.status(200).send({ message: "Produto criado com sucesso!" });
  } catch (err: any) {
    const errorMessage = handleErrors(err)

    return res.status(500).send({ message: errorMessage });
  }
}
