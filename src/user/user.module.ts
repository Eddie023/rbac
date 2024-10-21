import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from 'nestjs-pino';
import { LocalAuthGuard } from 'src/auth/localauth.guard';
import { RolesGuard } from 'src/role/role.guards';

import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
	imports: [TypeOrmModule.forFeature([User]), LoggerModule.forRoot()],
	controllers: [UserController],
	providers: [
		UserService,
		{
			provide: APP_GUARD,
			useClass: LocalAuthGuard
		},
		{
			provide: APP_GUARD,
			useClass: RolesGuard
		}
	]
})
export class UserModule {}
