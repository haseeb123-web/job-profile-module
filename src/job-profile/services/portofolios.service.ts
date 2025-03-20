import { Injectable } from '@nestjs/common';
import { PortfolioRepository } from '../repositories/portofolios.repository';
import { Portfolio } from '../../job-profile/entities/potfolios.entity';
import { CreatePortfolioDto } from '../dto/portfolio.dto';

@Injectable()
export class PortfolioService {
  constructor(private portfolioRepository: PortfolioRepository) {}

  async findAll(): Promise<Portfolio[]> {
    return this.portfolioRepository.findAll();
  }

  async findById(id: number): Promise<Portfolio> {
    return this.portfolioRepository.findById(id);
  }

  async create(createPortfolioDto: CreatePortfolioDto): Promise<Portfolio> {
    return this.portfolioRepository.createPortfolio(createPortfolioDto);
  }

  async delete(id: number): Promise<void> {
    await this.portfolioRepository.deletePortfolio(id);
  }
}
