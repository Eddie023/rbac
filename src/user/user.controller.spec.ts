import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { beforeEach, describe, expect, mock, test } from 'bun:test';

import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';

const mockUserRepository = {
	find: mock(),
	findBy: mock()
};

describe('UserController', () => {
	let controller: UserController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [UserController],
			providers: [
				UserService,
				{
					provide: getRepositoryToken(User),
					useValue: mockUserRepository
				}
			]
		}).compile();

		controller = module.get<UserController>(UserController);
	});

	test('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
