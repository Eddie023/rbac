import { MigrationInterface, QueryRunner } from 'typeorm';

const rawSQL = `
CREATE TABLE IF NOT EXISTS users(
id VARCHAR (100) PRIMARY KEY,
email VARCHAR (100) NOT NULL,
first_name VARCHAR (50) NOT NULL,
last_name VARCHAR (50) NOT NULL,
created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
is_verified BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS groups(
id SERIAL PRIMARY KEY,
name VARCHAR(50),
description VARCHAR(100),
created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS roles(
id SERIAL PRIMARY KEY, 
name VARCHAR(50),
description VARCHAR(100),
created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS user_group(
user_id VARCHAR(100) REFERENCES users(id),
group_id INT REFERENCES groups(id)
);

CREATE TABLE IF NOT EXISTS group_role(
group_id INT REFERENCES groups(id),
role_id INT REFERENCES roles(id)
);
`;

export class InitialTables1729468099287 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		return queryRunner.query(rawSQL);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		return queryRunner.query(`
            DROP table group_role;
            DROP table user_group;
            DROP table users;
            DROP table groups;
            DROP table roles;
            `);
	}
}
