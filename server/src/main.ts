import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { PORT } from './core/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors()
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  await app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

void bootstrap();
