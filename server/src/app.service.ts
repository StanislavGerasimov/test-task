import { Injectable } from '@nestjs/common';
import { Property } from './properties/property.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Property)
    private propertyRepository: Repository<Property>,
  ) {}

  async getAllProperties(): Promise<Property[]> {
    return this.propertyRepository.find();
  }
}
