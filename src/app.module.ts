import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { DatabaseModule } from './database/module';
import { UserModule } from './user/user.module';

@Module({
	imports: [ConfigModule.forRoot(), DatabaseModule, UserModule],
	controllers: [AppController],
	providers: [ConfigService]
})
export class AppModule {}
