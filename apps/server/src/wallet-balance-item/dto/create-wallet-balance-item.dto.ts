import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, Min } from "class-validator";

export class CreateBalanceItemDto {
    @ApiProperty()
    @IsString()
    walletId: string;

    @ApiProperty()
    @IsString()
    currency: string;

    @ApiProperty()
    @IsString()
    iconUrl: string;

    @ApiProperty()
    @IsString()
    symbol: string;

    @ApiProperty()
    @IsNumber({}, { message: 'The amount must be a number' })
    @Min(0, { message: 'The amount must be greater than to 0' })
    balance: number;
}
