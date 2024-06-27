import { Request, Response } from "express";
import { AuthenticateUseCase } from '@/use-cases/./company/authenticate-use-case';
import { handleErrors } from "@/utils/handle-errors";
import { z } from "zod";

export const authenticate = async (req: Request, res: Response) => {
  try {
    const authenticateBodySchema = z.object({
      email: z.string().email(),
      password: z.string()
    });

    const { email, password } = authenticateBodySchema.parse(req.body);

    const useCase = new AuthenticateUseCase();
    const { refreshToken, token } = await useCase.execute({ email, password });

    return res
      .cookie('refreshToken', refreshToken, {
        secure: true,  // HTTPs,
        sameSite: true,
        httpOnly: true,
        path: "/"
      })
      .status(201)
      .send({
        token,
        refreshToken
      })
  } catch (err: any) {
    const errorMessage = handleErrors(err)

    return res.status(500).send({ message: errorMessage });
  }

}
