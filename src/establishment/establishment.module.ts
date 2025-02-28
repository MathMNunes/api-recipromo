import { Module } from '@nestjs/common';
import { EstablishmentService } from './establishment.service';
import { EstablishmentController } from './establishment.controller';
import { PrismaModule } from '../../prisma/module';

@Module({
  imports: [PrismaModule],
  controllers: [EstablishmentController],
  providers: [EstablishmentService],
})
export class EstablishmentModule {}
