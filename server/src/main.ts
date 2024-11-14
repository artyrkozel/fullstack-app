import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder().setTitle('Block list').build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    
    app.use(cookieParser());
    app.enableCors();
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
