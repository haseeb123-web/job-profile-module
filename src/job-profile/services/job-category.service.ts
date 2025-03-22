import { Injectable } from '@nestjs/common';
import { JobResponseDto } from '../dto/job-category';
import { JobCategoryRepository } from '../repositories/job-category.repositories';
import { JobCategory } from '../entities/job-category.entity';

@Injectable()
export class JobCategoryService {
  constructor(private readonly jobCategoryRepository: JobCategoryRepository) {}

  async findAll(searchTerm?: string): Promise<JobResponseDto> {
    let jobCategories: JobCategory[];

    if (searchTerm && searchTerm.trim() !== '') {
      jobCategories =
        await this.jobCategoryRepository.findJobCategoriesBySearchTerm(
          searchTerm,
        );
    } else {
      jobCategories = await this.jobCategoryRepository.findAllJobCategories();
    }

    return {
      success: true,
      data: jobCategories.map((jobCategory) => ({
        id: jobCategory.id,
        value: jobCategory.value,
      })),
    };
  }
}
