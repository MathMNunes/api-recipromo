import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { EstablishmentService } from './establishment.service';
import { Establishment } from '@prisma/client';

@Controller('establishments')
export class EstablishmentController {
  constructor(private readonly establishmentService: EstablishmentService) {}

  @Get()
  async getEstablishments(@Query('city') city: string, @Query('state') state: string): Promise<Establishment[]> {
    return this.establishmentService.getEstablishments(city, state);
  }

  @Post()
  async createEstablishment(@Body() data: {
    name: string,
    category: string,
    address: string,
    city: string,
    state: string,
    zipcode: string,
    phone: string,
    hours: string,
    description: string
  }): Promise<Establishment> {
    return this.establishmentService.createEstablishment(data);
  }
}
