import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MissionsService {
  constructor(private prisma: PrismaService) {
  }

  findAll() {
    return this.prisma.mission.findMany({
      include: {
        supplyCenter: true,
        hotPlace: true,
      },
    });
  }

  create(supplyCenterId: number, hotPlaceId: number, type: any) {
    return this.prisma.mission.create({
      data: {
        supplyCenterId,
        hotPlaceId,
        type: type,
        status: 'Pending',
      },
    });
  }

  deleteOne(id: number) {
    return this.prisma.mission.delete({
      where: {
        id,
      },
    });
  }
}
