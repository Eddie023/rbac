import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('groups')
export class Group {
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
