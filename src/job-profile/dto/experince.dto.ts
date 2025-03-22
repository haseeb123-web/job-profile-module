import { IsNotEmpty, IsString, IsNumber, IsBoolean, IsOptional, IsDateString } from 'class-validator';

export class CreateExperienceDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  job_title: string;

  @IsNumber()
  @IsOptional()
  job_category?: number;

  @IsNumber()
  @IsNotEmpty()
  company: number;

  @IsNumber()
  @IsNotEmpty()
  country_id: number;

  @IsNumber()
  @IsNotEmpty()
  city_id: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDateString()
  @IsNotEmpty()
  start_date: string;

  @IsDateString()
  @IsOptional()
  end_date?: string | null;

  @IsNumber()
  @IsNotEmpty()
  industry_id: number;

  @IsBoolean()
  @IsNotEmpty()
  current_experience: boolean;

  @IsString()
  @IsOptional()
  experiences_year?: string;
}

export interface CompanyExperience {
    id: number;
    type: string;
    current_experience: boolean;
    job_title: string;
    description: string;
    industry_id: any;
    country_id: any;
    city_id: any;
    job_category: any;
    experiences_year: string | number;
    start_date: string;
    end_date: string | null;
  }
  
  export interface CompanyWithExperiences {
    id: number;
    name: string;
    image: string;
    total_experience_years: string | number;
    experiences: CompanyExperience[];
  }
  
  export interface CompaniesResponseDto {
    success: boolean;
    data: CompanyWithExperiences[];
  }
  
