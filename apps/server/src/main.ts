import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder().setTitle('Block list').build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    app.use(cookieParser());
    app.enableCors({ credentials: true, origin: 'http://localhost:5000' });
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
