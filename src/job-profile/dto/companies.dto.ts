export class CompanyDto {
    id: number;
    name: string;
  }
  
  export class CompanyResponseDto {
    success: boolean;
    data: CompanyDto[];
  }