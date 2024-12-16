import { Module } from '@nestjs/common';
import { MissionsService } from './missions.service';
import { MissionsController } from './missions.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [MissionsService],
  imports: [PrismaModule],
  controllers: [MissionsController]
})
export class MissionsModule {}
