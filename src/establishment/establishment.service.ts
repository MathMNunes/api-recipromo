import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/service';
import { Establishment } from '@prisma/client';

@Injectable()
export class EstablishmentService {
  constructor(private prisma: PrismaService) {}

  async getEstablishments(city: string, state: string): Promise<Establishment[]> {
    return this.prisma.establishment.findMany({
      where: {
        city: {
          contains: city,
        },
        state: {
          contains: state,
        },
      },
    });
  }

  async createEstablishment(data: {
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
    return this.prisma.establishment.create({
      data,
    });
  }
}
