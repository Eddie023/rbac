import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { beforeEach, describe, expect, jest, mock, test } from 'bun:test';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { UserService } from './user.service';

const mockUserRepository = {
	findOneBy: mock()
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
			const want: User = {
				id: '1',
				email: 'testing@gmail.com',
				firstName: 'steve',
				lastName: 'jobs',
				isVerified: true,
				createdAt: new Date(),
				updatedAt: new Date()
			};
			userRepository.findOneBy.mockResolvedValue(want);

			const got = await userService.findOne('1');
			expect(got).toEqual(want);
			expect(userRepository.findOneBy).toHaveBeenCalledWith({ id: '1' });
		});
	});
});
