// src/cities/cities.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { City } from '../entities/city.entity';
import { CitiesRepository } from '../repositories/city.repository';

@Injectable()
export class CitiesService {
  constructor(private readonly citiesRepository: CitiesRepository) {}

  async findAll(): Promise<City[]> {
    return this.citiesRepository.findAllCities();
  }

  async findOne(id: number): Promise<City> {
    const city = await this.citiesRepository.findCityById(id);
    if (!city) {
      throw new NotFoundException(`City with ID ${id} not found`);
    }
    return city;
  }

  async findByCountry(countryId: number): Promise<City[]> {
    return this.citiesRepository.findCitiesByCountryId(countryId);
  }
}