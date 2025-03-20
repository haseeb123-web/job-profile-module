import { Controller, Get, Post, Body, Param, HttpCode, HttpStatus, Delete } from '@nestjs/common';
import { PortfolioService } from '../services/portofolios.service';
import { CreatePortfolioDto } from '../dto/portfolio.dto';

@Controller('portfolios')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createPortfolioDto: CreatePortfolioDto) {
    const data = await this.portfolioService.create(createPortfolioDto);
    return {
      success: true,
      data
    };
  }

  @Get()
  async findAll() {
    const data = await this.portfolioService.findAll();
    return {
      success: true,
      data
    };
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.portfolioService.findById(id);
  }


  @Delete(':id')
  @HttpCode(HttpStatus.OK) 
  async delete(@Param('id') id: number) {
    await this.portfolioService.delete(id);
    return {
      success: true,
      message: 'Portfolio deleted successfully',
    };
  }
}
