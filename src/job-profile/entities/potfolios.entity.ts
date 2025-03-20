import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_portfolios')
export class Portfolio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type : 'int'})
  user_id: number;

  @Column()
  name: string;

  @Column()
  link: string;

  @Column({ name: 'created_at' })
  created_at: Date;

  @Column({ name: 'updated_at' })
  updated_at: Date;
}