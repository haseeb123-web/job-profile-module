import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from '../entities/city.entity';

@Injectable()
export class CitiesRepository {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ) {}

  async findAllCities(): Promise<City[]> {
    return this.cityRepository.find();
  }

  async findCityById(id: number): Promise<City | null> {
    return this.cityRepository.findOne({ where: { id } });
  }

  async findCitiesByCountryId(countryId: number): Promise<City[]> {
    return this.cityRepository.find({
      where: { countryId },
      order: { name: 'ASC' },
    });
  }
}