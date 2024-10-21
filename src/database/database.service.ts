import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Group } from 'src/user/entities/group.entity';
import { User } from 'src/user/entities/user.entity';
import { DataSourceOptions } from 'typeorm';

@Injectable()
export class DBConfig {
	constructor(private configService: ConfigService) {}

	async createTypeOrmOptions(): Promise<DataSourceOptions> {
		return {
			type: 'postgres',
			host: this.configService.getOrThrow('DB_HOST'),
			port: this.configService.getOrThrow('DB_PORT'),
			username: this.configService.getOrThrow('DB_USER'),
			password: this.configService.getOrThrow('DB_PASSWORD'),
			database: this.configService.getOrThrow('DB_NAME'),
			entities: [User, Group]
		};
	}
}
