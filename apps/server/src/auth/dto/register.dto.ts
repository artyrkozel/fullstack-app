import { IsPasswordsMatchingConstraint } from '@common/decorators';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength, Validate } from 'class-validator';

export class RegisterDto {
    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsString()
    @MinLength(6)
    password: string;

    @ApiProperty()
    @IsString()
    @MinLength(6)
    @Validate(IsPasswordsMatchingConstraint)
    passwordRepeat: string;
}
