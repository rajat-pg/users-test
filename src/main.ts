import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Test API')
    .setDescription('Playground for NEST Framework development')
    .setVersion('1.0')
    .build();
  const swagger_document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/swagger', app, swagger_document);
  await app.listen(3000);
}
bootstrap();
