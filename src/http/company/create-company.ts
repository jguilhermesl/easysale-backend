import { Request, Response } from "express";
import { CreateCompanyUseCase } from '@/use-cases/./company/create-company-use-case';
import { handleErrors } from '@/utils/handle-errors';
import { z } from "zod";

export const createCompany = async (req: Request, res: Response) => {
  try {
    const createCompanyBodySchema = z.object({
      email: z.string().email(),
      password: z.string(),
      name: z.string(),
      phone: z.string()
    });

    const { email, password, name, phone } = createCompanyBodySchema.parse(req.body);

    const useCase = new CreateCompanyUseCase();
    await useCase.execute({ email, password, name, phone })

    return res.status(200).send({ message: "Empresa criada com sucesso!" });
  } catch (err: any) {
    const errorMessage = handleErrors(err)

    return res.status(500).send({ message: errorMessage });
  }
}
