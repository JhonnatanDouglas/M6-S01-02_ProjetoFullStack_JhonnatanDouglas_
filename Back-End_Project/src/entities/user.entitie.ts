import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Contact } from './contact.entitie';

@Entity('user')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 127, unique: true })
  email: string;

  @Column({ length: 128 })
  password: string;

  @Column({ length: 20 })
  telephone: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    readonly: true,
  })
  register_date: string;

  @OneToMany(() => Contact, (contact) => contact.user, { cascade: true })
  contact: Contact[];
}

export { User };
