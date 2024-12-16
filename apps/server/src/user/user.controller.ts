import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    ParseUUIDPipe,
    UseGuards,
    UseInterceptors,
    ClassSerializerInterceptor,
} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { CreateUserDto } from './dto/create-user.dto';
import { UserResponse } from './responses';
import { UserService } from './user.service';

import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseInterceptors(ClassSerializerInterceptor)
    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        const user = await this.userService.create(createUserDto);
        return new UserResponse(user);
    }

    @ApiOkResponse({
        type: UserResponse,
    })
    @UseInterceptors(ClassSerializerInterceptor)
    @UseGuards(JwtAuthGuard)
    @Get(':idOrEmail')
    async findOne(@Param('idOrEmail') idOrEmail: string) {
        const user = await this.userService.findOne(idOrEmail);
        return new UserResponse(user);
    }

    @ApiOkResponse({
        type: UserResponse,
    })
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.userService.remove(id);
    }
}
