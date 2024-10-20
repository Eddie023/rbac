import { Test, TestingModule } from '@nestjs/testing';
import { test, expect, describe, mock, beforeEach } from "bun:test";
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  test('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
