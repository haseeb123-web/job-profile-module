import { Injectable } from '@nestjs/common';
import { ReferenceRepository } from '../repositories/references.repository';
import { Reference } from '../entities/references.entities';
import { CreateReferenceDto } from '../dto/references.dto';

@Injectable()
export class ReferenceService {
  constructor(private referenceRepository: ReferenceRepository) {}

  async findAll(): Promise<Reference[]> {
    return this.referenceRepository.findAll();
  }

  async findById(id: number): Promise<Reference> {
    return this.referenceRepository.findById(id);
  }

  async create(createReferenceDto: CreateReferenceDto): Promise<Reference> {
    return this.referenceRepository.createReference(createReferenceDto);
  }

  async delete(id: number): Promise<void> {
    await this.referenceRepository.deleteReference(id);
  }
}
