import {
  IsNotEmpty,
  IsString,
  IsNumber,
} from 'class-validator';

export class JobCategoryDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  value: string;
}

export class JobResponseDto {
  success: boolean;
  data: JobCategoryDto[];
}
