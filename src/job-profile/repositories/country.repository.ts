import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from '../entities/country.entity';

@Injectable()
export class CountriesRepository {
  constructor(
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>,
  ) {}

  async findAllCountries(): Promise<Country[]> {
    return this.countryRepository.find();
  }

  async findCountryById(id: number): Promise<Country | null> {
    return this.countryRepository.findOne({ where: { id } });
  }
}