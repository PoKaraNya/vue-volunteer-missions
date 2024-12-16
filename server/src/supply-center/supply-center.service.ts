import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SupplyCenterService {
  constructor(private prisma: PrismaService) {
  }

  findAll() {
    return this.prisma.supplyCenter.findMany({
      select: {
        id: true,
        name: true,
        location: {
          select: {
            latitude: true,
            longitude: true,
          },
        },
        products: {
          select: {
            product: true,
            count: true,
          },
        },
      },
    });
  }

  create(name: string, latitude: number, longitude: number) {
    return this.prisma.supplyCenter.create({
      data: {
        name,
        location: {
          create: {
            latitude,
            longitude,
          },
        },
      },
    });
  }

  deleteOne(id: number) {
    return this.prisma.supplyCenter.delete({
      where: {
        id,
      },
    });
  }
}
