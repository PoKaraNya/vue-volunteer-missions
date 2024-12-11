import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SupplyCenterService {
  constructor(private prisma: PrismaService) {
  }

  async findAll() {
    return this.prisma.supplyCenter.findMany({
      select: {
        id: true,
        name: true,
        location: {
          select: {
            latitude: true,
            longitude: true,
          }
        }
      }
    });
  }
}
