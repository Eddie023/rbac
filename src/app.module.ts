import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { DatabaseModule } from './database/module';
import { UserModule } from './user/user.module';

@Module({
	imports: [ConfigModule.forRoot(), DatabaseModule, UserModule, LoggerModule.forRoot()],
	controllers: [AppController],
	providers: [ConfigService]
})
export class AppModule {}
