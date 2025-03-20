import { City } from "../entities/city.entity";

export class CitysResponseDto {
    success: boolean;
    data: City[];
    message?: string;
  }
  
  export class CityResponseDto {
    success: boolean;
    data: City;
    message?: string;
  }
  