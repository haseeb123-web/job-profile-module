import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

export class CreatePortfolioDto {
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsUrl()
  @IsNotEmpty()
  link: string;
}


export class PortfolioResponseDto {
    id: number;
    user_id: number;
    name: string;
    link: string;
    created_at: Date;
    updated_at: Date;
  }