import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Reference } from '../entities/references.entities';
import { CreateReferenceDto } from '../dto/references.dto';

@Injectable()
export class ReferenceRepository extends Repository<Reference> {
  constructor(private dataSource: DataSource) {
    super(Reference, dataSource.createEntityManager());
  }

  async findAll(): Promise<Reference[]> {
    return this.find({
      order: { created_at: 'DESC' },
    });
  }

  async findById(id: number): Promise<Reference> {
    const reference = await this.findOneBy({ id });

    if (!reference) {
      throw new NotFoundException(`Reference with ID ${id} not found`);
    }

    return reference;
  }

  async createReference(createDto: CreateReferenceDto): Promise<Reference> {
    const now = new Date();

    const reference = this.create({
      ...createDto,
      created_at: now,
      updated_at: now,
    });

    return this.save(reference);
  }

  async deleteReference(id: number): Promise<void> {
    const reference = await this.findById(id);
    await this.remove(reference);
  }
}
