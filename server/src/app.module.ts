import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ConinsModule } from './coins/coins.module';
import { MinioClientModule } from './minio-client/minio-client.module';
import { FileUploadModule } from './file-upload/file-upload.module';

@Module({
    imports: [UserModule, PrismaModule, AuthModule, ConfigModule.forRoot({ isGlobal: true }), ConinsModule, MinioClientModule, FileUploadModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
