import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('roles')
export class User {
	@PrimaryColumn()
	id: string;

	@Column()
	name: string;

	@Column()
	description: string;

	@Column({ name: 'created_at' })
	createdAt: Date;

	@Column({ name: 'updated_at' })
	updatedAt: Date;
}
