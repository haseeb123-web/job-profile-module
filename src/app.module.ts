import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Certification } from './job-profile/entities/certification.entity';

import { Portfolio } from './job-profile/entities/potfolios.entity';

import { JobProfileModule } from './job-profile/job-profile.module';
import { Reference } from './job-profile/entities/references.entities';
import { Country } from './job-profile/entities/country.entity';
import { City } from './job-profile/entities/city.entity';
import { Companies } from './job-profile/entities/companies.entity';
import { Industries } from './job-profile/entities/industry.entities';
import { VisaType } from './job-profile/entities/visa.entity';
import { JobCategory } from './job-profile/entities/job-category.entity';
import { Experience } from './job-profile/entities/experince.entity';

@Module({
  imports: [
    JobProfileModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_DATABASE'),
        entities: [
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
        ],
        synchronize: process.env.NODE_ENV !== 'production',
      }),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
  ],
})
export class AppModule {}
