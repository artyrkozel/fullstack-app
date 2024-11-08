import { Controller, Get, Post, Body, Param, Delete, ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':idOrEmail')
    findOne(@Param('idOrEmail') idOrEmail: string) {
        return this.userService.findOne(idOrEmail);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.userService.remove(id);
    }
}
