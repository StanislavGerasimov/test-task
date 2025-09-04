import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Properties')
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('bigint')
  price: number;

  @Column('decimal', { precision: 5, scale: 2 })
  yield: number;

  @Column()
  sold: number;

  @Column('bigint')
  ticket: number;

  @Column()
  daysLeft: number;

  @Column({ nullable: true })
  photo: string;
}
