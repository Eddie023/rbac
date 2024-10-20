import { test, expect, describe, mock, beforeEach } from "bun:test";
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

const mockUserRepository = {
	find: mock(),
	findBy: mock()
};

describe('UserService', () => {
	let userService: UserService;
	let userRepository: Partial<Record<keyof Repository<User>, jest.Mock>>;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				UserService,
				{
					provide: getRepositoryToken(User),
					useValue: mockUserRepository
				}
			]
		}).compile();

		userService = module.get<UserService>(UserService);
		userRepository = module.get(getRepositoryToken(User));
	});

	test('should be defined', () => {
		expect(userService).toBeDefined();
	});

	describe('get user by id', () => {
		test('should return a user if found', async () => {
			const want = { id: '1', email: 'testing@gmail.com' };
			userRepository.findBy.mockResolvedValue(want);

			const got = await userService.findOne('1');
      console.log('got', got)
			expect(got).toEqual(want);
			expect(userRepository.findBy).toHaveBeenCalledWith({ id: '1' });
		});
	});
});
