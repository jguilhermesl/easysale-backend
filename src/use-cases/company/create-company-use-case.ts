import { hash } from "bcryptjs";
import { companyDAO } from "@/DAO/company"

interface CreateCompanyUseCaseProps {
  email: string,
  name: string,
  password: string,
  phone: string,
}

export class CreateCompanyUseCase {
  async execute({ email, name, password, phone }: CreateCompanyUseCaseProps) {
    const passwordHash = await hash(password, 8)

    await companyDAO.create({
      email,
      name,
      password: passwordHash,
      phone,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    return;
  }
}
