import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AtGuard } from './modules/common/guards/at.guards';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // app.setGlobalPrefix('api');
  // 这里使用需要手动注入依赖
  // app.useGlobalGuards(new AtGuard());
  await app.listen(3333);
}
bootstrap();
