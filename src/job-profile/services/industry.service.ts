import { Injectable } from '@nestjs/common';
import { IndustryResponseDto } from '../dto/industry.dto';
import { IndustriesRepository } from '../repositories/industry.repository';
import { Industries } from '../entities/industry.entities';

@Injectable()
export class IndustriesService {
  constructor(private readonly industriesRepository: IndustriesRepository) {}

  async findAll(searchTerm?: string): Promise<IndustryResponseDto> {
    let industries :Industries[];

    if (searchTerm) {
      industries =
        await this.industriesRepository.findIndustriesBySearchTerm(searchTerm);
    } else {
      industries = await this.industriesRepository.findAllIndustries();
    }

    return {
      success: true,
      data: industries.map((industry) => ({
        id: industry.id,
        value: industry.value,
      })),
    };
  }
}
