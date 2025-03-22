// src/companies/services/companies.service.ts
import { Injectable } from '@nestjs/common';
import { CompanyResponseDto } from '../dto/companies.dto';
import { CompaniesRepository } from '../repositories/companies.repository';
import { Companies } from '../entities/companies.entity';

@Injectable()
export class CompaniesService {
  constructor(private readonly companyRepository: CompaniesRepository) {}

  async findAll(searchTerm?: string): Promise<CompanyResponseDto> {
    let companies: Companies[];

    if (searchTerm) {
      companies =
        await this.companyRepository.findCompaniesBySearchTerm(searchTerm);
    } else {
      companies = await this.companyRepository.findAllCompanies();
    }

    return {
      success: true,
      data: companies.map((company) => ({
        id: company.id,
        name: company.name,
      })),
    };
  }
}
