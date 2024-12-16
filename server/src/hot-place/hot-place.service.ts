import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HotPlaceService {
  constructor(private prisma: PrismaService) {
  }

  findAll() {
    return this.prisma.hotPlace.findMany({
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

  create(name: string, latitude: number, longitude: number) {
    return this.prisma.hotPlace.create({
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
    return this.prisma.hotPlace.delete({
      where: {
        id,
      },
    });
  }
}
