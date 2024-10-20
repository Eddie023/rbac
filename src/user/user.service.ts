import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private usersRepository: Repository<User>
	) {}

	create(createUserDto: CreateUserDto) {
		console.log(createUserDto);
		return 'This action adds a new user';
	}

	findAll() {
		return this.usersRepository.find();
	}

	findOne(id: string) {
		return this.usersRepository.findOneBy({ id });
	}
}
