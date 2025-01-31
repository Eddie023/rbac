import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/localauth.guard';
import { Roles } from 'src/role/role.decorator';
import { Role } from 'src/role/role.enums';
import { RolesGuard } from 'src/role/role.guards';

import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
@UseGuards(LocalAuthGuard, RolesGuard)
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	@Roles(Role.Admin)
	create(@Body() createUserDto: CreateUserDto) {
		return this.userService.create(createUserDto);
	}

	@Get()
	@Roles(Role.Admin)
	findAll() {
		return this.userService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.userService.findOne(id);
	}

	@Get(':id/groups')
	getAllUserGroups(@Param('id') id: string) {
		return this.userService.getUserGroups(id);
	}
}
