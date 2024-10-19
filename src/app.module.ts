import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		DatabaseModule,
	],
	controllers: [AppController],
	providers: [AppService, ConfigService],
})

export class AppModule {}
