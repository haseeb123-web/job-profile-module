import { Injectable, NotFoundException } from '@nestjs/common';
import { Country } from '../entities/country.entity';
import { CountriesRepository } from '../repositories/country.repository';

@Injectable()
export class CountriesService {
  constructor(private readonly countriesRepository: CountriesRepository) {}

  async findAll(): Promise<Country[]> {
    return this.countriesRepository.findAllCountries();
  }

  async findOne(id: number): Promise<Country> {
    const country = await this.countriesRepository.findCountryById(id);
    if (!country) {
      throw new NotFoundException(`Country with ID ${id} not found`);
    }
    return country;
  }
}
