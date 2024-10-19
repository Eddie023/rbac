import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService {
	constructor(private dataSource: DataSource) {}

	async getHello(): Promise<string> {
		console.log('called inside getHello');
		const resp = await this.dataSource.query('SELECT 1+1;');
		console.log('the resp is', resp);

		return 'Hello World!';
	}
}
