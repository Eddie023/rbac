import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';

import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';

@Module({
	imports: [ConfigModule.forRoot(), DatabaseModule, UserModule, LoggerModule.forRoot()],
	controllers: [AppController],
	providers: [ConfigService]
})
export class AppModule {}
