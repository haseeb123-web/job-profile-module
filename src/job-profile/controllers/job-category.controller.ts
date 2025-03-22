import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { JobCategoryService } from '../services/job-category.service';
import { JobResponseDto } from '../dto/job-category';

@Controller('job-categories')
export class JobCategoryController {
  constructor(private readonly jobCategoryService: JobCategoryService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAllJobCategories(
    @Query('search') search?: string,
  ): Promise<JobResponseDto> {
    return this.jobCategoryService.findAll(search);
  }
}
