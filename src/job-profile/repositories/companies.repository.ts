// src/companies/repositories/companies.repository.ts
import { Injectable } from '@nestjs/common';
import { DataSource, Repository, ILike } from 'typeorm';
import { Companies } from '../entities/companies.entity';

@Injectable()
export class CompaniesRepository extends Repository<Companies> {
  constructor(private dataSource: DataSource) {
    super(Companies, dataSource.createEntityManager());
  }

  async findAllCompanies(): Promise<Companies[]> {
    return this.find();
  }

  async findCompaniesBySearchTerm(searchTerm: string): Promise<Companies[]> {
    return this.find({
      where: {
        name: ILike(`%${searchTerm}%`),
      },
    });
  }
}