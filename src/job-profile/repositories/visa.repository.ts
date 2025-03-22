import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { VisaType } from '../entities/visa.entity';

@Injectable()
export class VisaTypeRepository extends Repository<VisaType> {
  constructor(private dataSource: DataSource) {
    super(VisaType, dataSource.createEntityManager());
  }

  async findAllVisaTypes(): Promise<VisaType[]> {
    return this.find();
  }
}