import { Controller, Get, Query } from '@nestjs/common';
import { IndustriesService } from '../services/industry.service';
import { IndustryResponseDto } from '../dto/industry.dto';

@Controller('industries')
export class IndustriesController {
  constructor(private readonly industriesService: IndustriesService) {}

  @Get()
  async getAllIndustries(@Query('search') search?: string): Promise<IndustryResponseDto> {
    return this.industriesService.findAll(search);
  }
}