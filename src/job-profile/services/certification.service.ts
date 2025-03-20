import { Injectable } from '@nestjs/common';
import { CertificationRepository } from '../repositories/certification.repository';
import { Certification } from '../../job-profile/entities/certification.entity';
import { CreateCertificationDto } from '../dto/certification.dto';

@Injectable()
export class CertificationService {
  constructor(private certificationRepository: CertificationRepository) {}

  async findAll(): Promise<Certification[]> {
    return this.certificationRepository.findAll();
  }

  async findById(id: number): Promise<Certification> {
    return this.certificationRepository.findById(id);
  }

  async create(createCertificationDto: CreateCertificationDto): Promise<Certification> {
    return this.certificationRepository.createCertification(createCertificationDto);
  }

  async delete(id: number): Promise<void> {
    await this.certificationRepository.deleteCertification(id);
  }
}