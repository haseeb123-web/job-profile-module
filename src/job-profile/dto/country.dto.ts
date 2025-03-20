
import { Country } from '../entities/country.entity';

export class CountriesResponseDto {
    success: boolean;
    data: Country[];
    message?: string;
  }
  
  export class CountryResponseDto {
    success: boolean;
    data: Country;
    message?: string;
  }
  
