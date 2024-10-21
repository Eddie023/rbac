import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

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

	// eslint-disable-next-line
	// FIXME: use TyeORM functionalities for many to many relation.
	async getUserGroups(userId: string) {
		const userGroups = await this.usersRepository.query(
			`
      SELECT u.id, u.email, groups.id as group_id, groups.name, groups.description 
      FROM users u 
      INNER JOIN user_group ug ON ug.user_id = u.id 
      INNER JOIN groups ON ug.group_id = groups.id
      WHERE u.id = '${userId}';
      `
		);
		return userGroups;
	}
}
