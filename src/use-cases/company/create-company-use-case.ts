import { companyDAO } from "@/DAO/company"

interface CreateCompanyUseCaseProps {
  email: string,
  name: string,
  password: string,
  phone: string,
}

export class CreateCompanyUseCase {
  async execute({ email, name, password, phone }: CreateCompanyUseCaseProps) {
    await companyDAO.create({
      email,
      name,
      password,
      phone,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    return;
  }
}
