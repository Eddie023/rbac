import { BadRequestException, Injectable, Logger } from '@nestjs/common';
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

	async create(createUserDto: CreateUserDto) {
		const exist = await this.usersRepository.existsBy({ id: createUserDto.id });

		if (exist) {
			throw new BadRequestException(`user with id: ${createUserDto.id} already exists`);
		}

		return this.usersRepository.insert(createUserDto);
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
