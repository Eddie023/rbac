import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsersTable1729304634236 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE IF NOT EXISTS users(
				id VARCHAR (100) PRIMARY KEY,
				email VARCHAR (100) NOT NULL, 
				first_name VARCHAR (50) NOT NULL,
				last_name VARCHAR (50) NOT NULL,
				created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
				updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
				is_verified BOOLEAN NOT NULL DEFAULT FALSE);`
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`DROP TABLE IF EXISTS users;`
		)
	}
}
