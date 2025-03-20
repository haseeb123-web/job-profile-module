import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Portfolio } from '../../job-profile/entities/potfolios.entity';
import { CreatePortfolioDto } from '../dto/portfolio.dto';

@Injectable()
export class PortfolioRepository extends Repository<Portfolio> {
  constructor(private dataSource: DataSource) {
    super(Portfolio, dataSource.createEntityManager());
  }

  async findAll(): Promise<Portfolio[]> {
    return this.find({
      order: { created_at: 'DESC' },
    });
  }

  async findById(id: number): Promise<Portfolio> {
    const portfolio = await this.findOneBy({ id });

    if (!portfolio) {
      throw new NotFoundException(`Portfolio with ID ${id} not found`);
    }

    return portfolio;
  }

  async createPortfolio(createDto: CreatePortfolioDto): Promise<Portfolio> {
    const now = new Date();

    const portfolio = this.create({
      ...createDto,
      created_at: now,
      updated_at: now,
    });

    return this.save(portfolio);
  }

  async deletePortfolio(id: number): Promise<void> {
    const portfolio = await this.findById(id);
    await this.remove(portfolio);
  }
}
