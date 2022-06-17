import { PrismaClient, User } from "@prisma/client";

export class UserController {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  public async create(data: Omit<User, "id">) {
    const user = await this.prisma.user.create({
      data: {
        name: data.name,
      },
    });
    return user;
  }
}
