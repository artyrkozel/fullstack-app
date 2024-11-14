import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class CreateUserDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    roles: Role[];
}
