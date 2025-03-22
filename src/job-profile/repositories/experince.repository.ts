import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Experience } from '../entities/experince.entity';

@Injectable()
export class ExperienceRepository extends Repository<Experience> {
  constructor(private dataSource: DataSource) {
    super(Experience, dataSource.createEntityManager());
  }

   //Create Experince
  async createExperience(experienceData: Partial<Experience>): Promise<any> {
    const experience = this.create(experienceData);
    const savedExperience = await this.save(experience);
    

    const fullExperience = await this.findOne({
      where: { id: savedExperience.id },
      relations: ['industry_id', 'country_id', 'city_id', 'job_category', 'company_id'],
    });
    
    return this.formatExperienceResponse(fullExperience);
  }


     //get Experince by id
  async findExperienceById(id: number): Promise<Experience> {
    const experience = await this.findOne({
      where: { id },
      relations: ['industry_id', 'country_id', 'city_id', 'job_category', 'company_id'],
    });
  
    if (!experience) {
      throw new NotFoundException(`Experience with ID ${id} not found`);
    }
  
    return experience;
  }


  // get All Experince 
  async findAllExperiences(): Promise<any[]> {
    const experiences = await this.find({
      relations: ['industry_id', 'country_id', 'city_id', 'job_category', 'company_id'],
    });

    return experiences.map(experience => this.formatExperienceResponse(experience));
  }


  private formatExperienceResponse(experience: any): any {
    return {
      id: experience.id,
      type: experience.type,
      current_experience: experience.current_experience,
      job_title: experience.job_title,
      description: experience.description,
      industry_id: {
        id: experience.industry_id.id,
        name: experience.industry_id.value 
      },
      country_id: {
        id: experience.country_id.id,
        name: experience.country_id.name
      },
      city_id: {
        id: experience.city_id.id,
        name: experience.city_id.name
      },
      job_category: experience.job_category ? {
        id: experience.job_category.id,
        value: experience.job_category.value
      } : null,
      experiences_year: experience.experiences_year,
      start_date: experience.start_date instanceof Date ? 
        experience.start_date.toISOString().split('T')[0] : 
        experience.start_date,
      end_date: experience.end_date instanceof Date ? 
        experience.end_date.toISOString().split('T')[0] : 
        experience.end_date,
      company_id: {
        id: experience.company_id.id,
        name: experience.company_id.name
      }
    };
  }
}
