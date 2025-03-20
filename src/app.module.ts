import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Certification } from './job-profile/entities/certification.entity';

import { Portfolio } from './job-profile/entities/potfolios.entity';

import { JobProfileModule } from './job-profile/job-profile.module';
import { Reference } from './job-profile/entities/references.entities';
import { Country } from './job-profile/entities/country.entity';
import { City } from './job-profile/entities/city.entity';

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
        entities: [Certification, Portfolio, Reference, Country, City],
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
