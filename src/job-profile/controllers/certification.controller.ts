import {
  Get,
  Post,
  Body,
  Param,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CertificationService } from '../services/certification.service';
import { CreateCertificationDto } from '../dto/certification.dto';

@Controller('certifications')
export class CertificationController {
  constructor(private readonly certificationService: CertificationService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createCertificationDto: CreateCertificationDto) {
    const data = await this.certificationService.create(createCertificationDto);
    return {
      success: true,
      data,
    };
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.certificationService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id') id: number) {
    return this.certificationService.findById(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async delete(@Param('id') id: number) {
    await this.certificationService.delete(id);
    return {
      success: true,
      message: 'Certification deleted successfully',
    };
  }
}
