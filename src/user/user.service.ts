import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private usersRepository: Repository<User>
	) {}

	create(createUserDto: CreateUserDto) {
		return 'This action adds a new user';
	}

	findAll() {
		return this.usersRepository.find();
	}

	findOne(id: string) {
		return this.usersRepository.findBy({ id });
	}
}
