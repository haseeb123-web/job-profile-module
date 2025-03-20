import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Certification } from '../../job-profile/entities/certification.entity';
import { CreateCertificationDto } from '../dto/certification.dto';

@Injectable()
export class CertificationRepository extends Repository<Certification> {
  constructor(private dataSource: DataSource) {
    super(Certification, dataSource.createEntityManager());
  }

  async findAll(): Promise<Certification[]> {
    return this.find({
      order: { created_at: 'DESC' },
    });
  }

  async findById(id: number): Promise<Certification> {
    const certification = await this.findOneBy({ id });

    if (!certification) {
      throw new NotFoundException(`Certification with ID ${id} not found`);
    }

    return certification;
  }

  async createCertification(
    createDto: CreateCertificationDto,
  ): Promise<Certification> {
    const now = new Date();

    const certification = this.create({
      ...createDto,
      created_at: now,
      updated_at: now,
    });

    return this.save(certification);
  }

  async deleteCertification(id: number): Promise<void> {
    const certification = await this.findById(id);
    await this.remove(certification);
  }
}
