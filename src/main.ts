import { NestFactory } from '@nestjs/core';
import cors from 'cors';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const options = new DocumentBuilder()
    .setTitle('MongoDB Auth REST API')
    .setDescription('API REST for Auth User with MongoDB')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  // Api path
  SwaggerModule.setup('api', app, document);

  await app.listen(5019);
}
bootstrap();
