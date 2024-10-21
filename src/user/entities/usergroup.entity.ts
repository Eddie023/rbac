import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('user_group')
export class UserGroup {
	@Column({name: "user_id"})
	user_id: string;

	@Column()
	group_id: number;
}
