import { Module } from '@nestjs/common';
import { HotPlaceService } from './hot-place.service';
import { HotPlaceController } from './hot-place.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [HotPlaceService],
  imports: [PrismaModule],
  controllers: [HotPlaceController],
})
export class HotPlaceModule {
}
