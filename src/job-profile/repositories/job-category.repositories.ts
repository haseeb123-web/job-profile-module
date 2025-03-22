// src/job-categories/repositories/job-category.repository.ts
import { Injectable } from '@nestjs/common';
import { DataSource, Repository, ILike } from 'typeorm';
import { JobCategory } from '../entities/job-category.entity';

@Injectable()
export class JobCategoryRepository extends Repository<JobCategory> {
  constructor(private dataSource: DataSource) {
    super(JobCategory, dataSource.createEntityManager());
  }

  async findAllJobCategories(): Promise<JobCategory[]> {
    return this.find();
  }

  async findJobCategoriesBySearchTerm(
    searchTerm: string,
  ): Promise<JobCategory[]> {
    return this.find({
      where: {
        value: ILike(`%${searchTerm}%`),
      },
    });
  }
}
