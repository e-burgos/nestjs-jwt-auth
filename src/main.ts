import { NestFactory } from '@nestjs/core';
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
  SwaggerModule.setup('', app, document, {
    swaggerOptions: {
      defaultModelRendering: 'model', // Show "Schema" instead of "Example Value" by default
    },
  });

  // // Swagger
  // app.use(express.static(pathToSwaggerUi));

  await app.listen(5019);
}
bootstrap();
