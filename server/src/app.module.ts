import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SupplyCenterModule } from './supply-center/supply-center.module';
import { HotPlaceModule } from './hot-place/hot-place.module';
import { ProductsModule } from './products/products.module';
import { MissionsModule } from './missions/missions.module';

@Module({
  imports: [
    PrismaModule,
    ArticlesModule,
    UsersModule,
    AuthModule,
    SupplyCenterModule,
    HotPlaceModule,
    ProductsModule,
    MissionsModule
  ],
})
export class AppModule {
}
