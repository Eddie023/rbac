import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

const ds = new DataSource({
	type: 'postgres',
	host: process.env.DB_HOST,
	port: 5432,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	migrations: ["migrations/*.ts"],
	logging: true, 
});

export default ds;
 