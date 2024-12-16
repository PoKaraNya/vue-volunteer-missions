import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  create(name: string, description: string, price: number) {
    return this.prisma.product.create({
      data: {
        name,
        description,
        price
      },
    });
  }

  deleteOne(id: number) {
    return this.prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
