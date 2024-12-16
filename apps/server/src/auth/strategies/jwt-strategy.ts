import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { AuthService } from '@auth/auth.service';
import { JwtPayload } from '@auth/interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt-bearer') {
    constructor(
        private readonly configService: ConfigService,
        private readonly authService: AuthService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET'),
        });
    }

    async validate(payload: JwtPayload): Promise<JwtPayload> | never {
        const isValid = await this.authService.verifyPaload(payload);

        if (!isValid) {
            throw new UnauthorizedException('Invalid token');
        }

        return payload;
    }
}
