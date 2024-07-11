import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from '../prisma/module';
import { AuthModule } from './auth/auth.module';
import { ScheduleModule } from './schedule/schedule.module';
import { EstablishmentModule } from './establishment/establishment.module';

@Module({
  imports: [
    UserModule,
    PrismaModule,
    AuthModule,
    ScheduleModule,
    EstablishmentModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
