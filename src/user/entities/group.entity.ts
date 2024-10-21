import { Column, Entity, PrimaryColumn } from 'typeorm';

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
