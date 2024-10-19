import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { DataSourceOptions } from 'typeorm';

@Injectable()
export class TypeOrmConfigService {
  constructor(private configService: ConfigService) {}

  async createTypeOrmOptions(): Promise<DataSourceOptions> {
    return {
        type: 'postgres',
        host: this.configService.getOrThrow('DB_HOST'),
        port: this.configService.getOrThrow('DB_PORT'),
        username: this.configService.getOrThrow('DB_USER'),
        password: this.configService.getOrThrow('DB_PASSWORD'),
        database: this.configService.getOrThrow('DB_NAME')
    };
  }
}