import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn } from 'typeorm';
import { City } from './city.entity';

@Entity('countries')
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'country_code' })
  countryCode: string;

  @Column({ name: 'currency_code' })
  currencyCode: string;

  @CreateDateColumn({ name: 'created_at', nullable: true })
  createdAt: Date;

  @OneToMany(() => City, city => city.country)
  cities: City[];
}