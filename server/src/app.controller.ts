import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Property } from './properties/property.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('properties')
  async getProperties(): Promise<Property[]> {
    const data = await this.appService.getAllProperties();
    return data;
  }
}
