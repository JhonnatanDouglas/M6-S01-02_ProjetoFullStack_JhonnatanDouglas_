import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entitie';

@Entity('contact')
class Contact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 20 })
  telephone: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    readonly: true,
  })
  register_date: string;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;
}

export { Contact };
