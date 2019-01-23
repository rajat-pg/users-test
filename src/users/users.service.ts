import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private readonly userRepositiry: Repository<User>
    ) {}

    async findAll(): Promise<User[]> {
        return await this.userRepositiry.find();
    }

    async create(user: User): Promise<User> {
        const user_model = await this.userRepositiry.create(user);
        return await this.userRepositiry.save(user_model);
    }

}
