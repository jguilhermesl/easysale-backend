import { Request, Response } from "express";
import { AuthenticateUseCase } from '@/use-cases/./company/authenticate-use-case';
import { handleErrors } from "@/utils/handle-errors";

export const authenticate = async (req: Request, res: Response) => {
  try {
    const { companyId } = req.userState;

    const useCase = new AuthenticateUseCase();
    await useCase.execute({ companyId })

    return res.status(200).send({});
  } catch (err: any) {
    const errorMessage = handleErrors(err)

    return res.status(500).send({ message: errorMessage });
  }

}
