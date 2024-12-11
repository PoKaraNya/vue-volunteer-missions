import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SupplyCenterModule } from './supply-center/supply-center.module';
import { HotPlaceModule } from './hot-place/hot-place.module';

@Module({
  imports: [
    PrismaModule,
    ArticlesModule,
    UsersModule,
    AuthModule,
    SupplyCenterModule,
    HotPlaceModule
  ],
})
export class AppModule {
}
