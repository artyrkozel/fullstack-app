import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { options } from './config';
import { JwtStrategy } from './strategies/jwt-strategy';

import { UserModule } from 'src/user/user.module';

@Module({
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, JwtService],
    imports: [PassportModule, JwtModule.registerAsync(options()), UserModule],
    exports: [AuthService],
})
export class AuthModule {}
