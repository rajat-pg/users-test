import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { create } from 'domain';
import { CreateUserDto } from './dto/create-user.dto';
import { plainToClass } from 'class-transformer';

@Controller('users')
export class UsersController {

    constructor(
        private readonly userService: UsersService
    ) {}

    @Get()
    listAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post()
    create(@Body() user: CreateUserDto): Promise<User> {
        return this.userService.create(plainToClass(User, user));
    }

}
