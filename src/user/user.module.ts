import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from 'nestjs-pino';

import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/role/role.guards';
import { AuthGuard } from 'src/auth/localauth.guard';

@Module({
	imports: [TypeOrmModule.forFeature([User]), LoggerModule.forRoot()],
	controllers: [UserController],
	providers: [UserService, {
    provide: APP_GUARD,
    useClass: AuthGuard
  }, {
    provide: APP_GUARD,
    useClass: RolesGuard
  },],
})

export class UserModule {
}
