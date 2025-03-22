import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Industries } from './industry.entities';
import { Country } from './country.entity';
import { City } from './city.entity';
import { JobCategory } from './job-category.entity';
import { Companies } from './companies.entity';

@Entity()
export class Experience {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  current_experience: boolean;

  @Column()
  job_title: string;

  @Column()
  description: string;

  @ManyToOne(() => Industries)
  industry_id: Industries;

  @ManyToOne(() => Country)
  country_id: Country;

  @ManyToOne(() => City)
  city_id: City;

  @ManyToOne(() => JobCategory)
  job_category: JobCategory;

  @Column()
  experiences_year: string;

  @Column({ type: 'date' })
  start_date: Date;

  @Column({ type: 'date', nullable: true })
  end_date: Date | null;

  @ManyToOne(() => Companies)
  company_id: Companies;
}
