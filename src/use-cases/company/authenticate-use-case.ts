import { compare } from 'bcryptjs';
import { companyDAO } from "@/DAO/company";
import { sign } from 'jsonwebtoken';

interface AuthenticateUseCaseProps {
  email: string,
  password: string
}

export class AuthenticateUseCase {
  async execute({ email, password }: AuthenticateUseCaseProps) {
    const user = await companyDAO.findFirst({ email })

    if (!user) {
      throw new Error("Usuário/senha incorretos.")
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Usuário/senha incorretos.")
    }

    const token = this.generateToken(user, "default")

    const refreshToken = this.generateToken(user, "refreshToken")

    return { token, refreshToken }
  }

  generateToken(user: { name: string, email: string, id: string }, type: "default" | "refreshToken") {
    const token = sign(
      {
        name: user?.name,
        email: user?.email
      },
      '' + process.env.JWT_SECRET,
      {
        subject: user?.id,
        expiresIn: type === "default" ? '7d' : '7d',
      }
    );

    return token;
  }
}
