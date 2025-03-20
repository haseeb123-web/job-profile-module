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

@Module({
  imports: [TypeOrmModule.forFeature([Certification, Portfolio, Reference , Country , City])],
  controllers: [
    CertificationController,
    ReferenceController,
    PortfolioController,
    CountriesController,
    CitiesController
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
    CitiesService ,
    CitiesRepository
  ],
  exports: [
    ReferenceService,
    PortfolioService,
    CertificationService,
    CountriesService,
    CitiesService
  ],
})
export class JobProfileModule {}
