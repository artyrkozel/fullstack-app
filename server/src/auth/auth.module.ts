import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { options } from './config';
import { JwtStrategy } from './strategies/jwt-strategy';

@Module({
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, JwtService],
    imports: [PassportModule, JwtModule.registerAsync(options()), UserModule],
    exports: [AuthService]
})
export class AuthModule {}
