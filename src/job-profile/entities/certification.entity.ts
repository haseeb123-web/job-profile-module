import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_job_certificates')
export class Certification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  course_name: string;

  @Column()
  issuing_organization: string;

  @Column({ name: 'created_at' })
  created_at: Date;

  @Column({ name: 'updated_at' })
  updated_at: Date;
}