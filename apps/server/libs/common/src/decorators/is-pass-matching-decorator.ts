import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

import { RegisterDto } from '@auth/dto/register.dto';

@ValidatorConstraint({ name: 'IsPasswordsMatching', async: false })
export class IsPasswordsMatchingConstraint implements ValidatorConstraintInterface {
    validate(password: string, args: ValidationArguments): boolean {
        const obj = args.object as RegisterDto;
        return obj.password === password;
    }

    defaultMessage(_?: ValidationArguments): string {
        return 'Passwords do not match!';
    }
}
