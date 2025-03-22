import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsBoolean,
  IsArray,
} from 'class-validator';

export class IndustryDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  value: string;
}

export class IndustryResponseDto {
  success: boolean;
  data: IndustryDto[];
}
