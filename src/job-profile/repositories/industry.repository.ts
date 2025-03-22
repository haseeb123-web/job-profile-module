// src/industries/repositories/industries.repository.ts
import { Injectable } from '@nestjs/common';
import { DataSource, Repository, ILike } from 'typeorm';
import { Industries } from '../entities/industry.entities';

@Injectable()
export class IndustriesRepository extends Repository<Industries> {
  constructor(private dataSource: DataSource) {
    super(Industries, dataSource.createEntityManager());
  }

  async findAllIndustries(): Promise<Industries[]> {
    return this.find();
  }

  async findIndustriesBySearchTerm(searchTerm: string): Promise<Industries[]> {
    return this.find({
      where: {
        value: ILike(`%${searchTerm}%`),
      },
    });
  }
}