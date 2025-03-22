import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Certification } from './entities/certification.entity';
import { Portfolio } from './entities/potfolios.entity';
import { Reference } from './entities/references.entities';
import { CertificationController } from './controllers/certification.controller';
import { ReferenceController } from './controllers/references.controller';
import { PortfolioController } from './controllers/portofolios.controller';
import { PortfolioRepository } from './repositories/portofolios.repository';
import { PortfolioService } from './services/portofolios.service';
import { CertificationRepository } from './repositories/certification.repository';
import { CertificationService } from './services/certification.service';
import { ReferenceRepository } from './repositories/references.repository';
import { ReferenceService } from './services/references.service';
import { CountriesController } from './controllers/country.controller';
import { CountriesService } from './services/country.service';
import { CountriesRepository } from './repositories/country.repository';
import { Country } from './entities/country.entity';
import { City } from './entities/city.entity';
import { CitiesController } from './controllers/city.controller';
import { CitiesService } from './services/city.service';
import { CitiesRepository } from './repositories/city.repository';
import { CompaniesController } from './controllers/companies.controller';
import { CompaniesService } from './services/companies.service';
import { CompaniesRepository } from './repositories/companies.repository';
import { Companies } from './entities/companies.entity';
import { Industries } from './entities/industry.entities';
import { IndustriesController } from './controllers/industry.controller';
import { IndustriesService } from './services/industry.service';
import { IndustriesRepository } from './repositories/industry.repository';
import { VisaType } from './entities/visa.entity';
import { VisaTypeController } from './controllers/visa.controller';
import { VisaTypeRepository } from './repositories/visa.repository';
import { VisaTypeService } from './services/visa.service';
import { JobCategory } from './entities/job-category.entity';
import { JobCategoryController } from './controllers/job-category.controller';
import { JobCategoryRepository } from './repositories/job-category.repositories';
import { JobCategoryService } from './services/job-category.service';
import { Experience } from './entities/experince.entity';
import { ExperienceController } from './controllers/experince.controller';
import { ExperienceService } from './services/experince.service';
import { ExperienceRepository } from './repositories/experince.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Certification,
      Portfolio,
      Reference,
      Country,
      City,
      Companies,
      Industries,
      VisaType,
      JobCategory ,
      Experience
    ]),
  ],
  controllers: [
    CertificationController,
    ReferenceController,
    PortfolioController,
    CountriesController,
    CitiesController,
    CompaniesController,
    IndustriesController,
    VisaTypeController,
    JobCategoryController ,
    ExperienceController
  ],
  providers: [
    PortfolioRepository,
    PortfolioService,
    CertificationRepository,
    CertificationService,
    ReferenceRepository,
    ReferenceService,
    CountriesService,
    CountriesRepository,
    CitiesService,
    CitiesRepository,
    CompaniesService,
    CompaniesRepository,
    IndustriesService,
    IndustriesRepository,
    VisaTypeRepository,
    VisaTypeService,
    JobCategoryRepository,
    JobCategoryService ,
    ExperienceService ,
    ExperienceRepository
  ],
  exports: [
    ReferenceService,
    PortfolioService,
    CertificationService,
    CountriesService,
    CitiesService,
    CompaniesService,
    IndustriesService,
    VisaTypeService,
    JobCategoryService ,
    ExperienceService
  ],
})
export class JobProfileModule {}
