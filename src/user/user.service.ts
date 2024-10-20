import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
	private readonly logger = new Logger('user-service');

	constructor(
		@InjectRepository(User)
		private usersRepository: Repository<User>
	) {}

	create(createUserDto: CreateUserDto) {
		console.log(createUserDto);
		return 'This action adds a new user';
	}

	findAll() {
		this.logger.log('fetching all users');
		return this.usersRepository.find();
	}

	findOne(id: string) {
		this.logger.log('fetching user info', 'id', id);
		return this.usersRepository.findOneBy({ id });
	}
}
