import { Controller, Get, Query } from '@nestjs/common';
import { CompaniesService } from '../services/companies.service';
import { CompanyResponseDto } from '../dto/companies.dto';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  async getAllCompanies(@Query('search') search?: string): Promise<CompanyResponseDto> {
    return this.companiesService.findAll(search);
  }
}