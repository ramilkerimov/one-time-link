import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OneTimeLink {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  value: string;

  @Column({ default: true })
  isActive: boolean;
}
