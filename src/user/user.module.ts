import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';
import { LoggerModule } from 'nestjs-pino';

@Module({
	imports: [TypeOrmModule.forFeature([User]), LoggerModule.forRoot()],
	controllers: [UserController],
	providers: [UserService]
})
export class UserModule {}
