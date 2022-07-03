import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'credentials' })
export class Credentials {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  key: string;

  @Column()
  secret: string;

  @Column({ name: 'user_id' })
  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
