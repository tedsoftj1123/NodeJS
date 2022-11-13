import { Controller, Get, Param, Res } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

@Controller('test')
export class TestController {
  @Get('/user')
  testController(@Res() res): string {
      return res.statu
  }
}
bootstrap();
