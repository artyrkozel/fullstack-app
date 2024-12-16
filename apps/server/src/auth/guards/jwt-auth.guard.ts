import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { TokenExpiredError } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt-bearer') {
    constructor() {
        super();
    }

    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();

        const token = this.extractTokenFromHeader(request);

        if (!token) {
            throw new UnauthorizedException('Access token is missing');
        }

        const isValid = (await super.canActivate(context)) as boolean;
        return isValid;
    }

    handleRequest(err, user, info) {
        if (info instanceof TokenExpiredError) {
            throw new UnauthorizedException('Token has expired');
        }
        return user;
    }

    private extractTokenFromHeader(request: any): string | null {
        const authHeader = request.headers['authorization'];

        if (!authHeader) {
            return null;
        }
        const parts = String(authHeader).split(' ');
        return parts.length === 2 ? String(parts[1]) : null;
    }
}
