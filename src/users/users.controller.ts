import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {

    constructor(
        private readonly userService: UsersService
    ) {}

    @Get()
    listAll(): Promise<User[]> {
        return this.userService.findAll();
    }

}
