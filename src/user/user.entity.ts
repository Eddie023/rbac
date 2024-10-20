import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export class User {
	@PrimaryColumn()
	id: string;

	@Column()
	email: string;

	@Column({ name: 'first_name' })
	firstName: string;

	@Column({ name: 'last_name' })
	lastName: string;

	@Column({ name: 'created_at' })
	createdAt: Date;

	@Column({ name: 'updated_at' })
	updatedAt: Date;

	@Column({ default: false, name: 'is_verified' })
	isVerified: boolean;
}
