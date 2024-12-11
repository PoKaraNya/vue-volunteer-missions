import { Module } from '@nestjs/common';
import { SupplyCenterService } from './supply-center.service';
import { SupplyCenterController } from './supply-center.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [SupplyCenterService],
  imports: [PrismaModule],
  controllers: [SupplyCenterController]
})
export class SupplyCenterModule {}
