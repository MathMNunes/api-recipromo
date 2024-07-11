import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/service';
import { Schedule } from '@prisma/client';

@Injectable()
export class ScheduleService {
  constructor(private prisma: PrismaService) {}

  async createSchedule(data: {
    userId: number,
    type: string,
    date: string,
    time: string,
    notes?: string
  }): Promise<Schedule> {
    return this.prisma.schedule.create({
      data: {
        userId: data.userId,
        type: data.type,
        date: new Date(data.date),
        time: data.time,
        notes: data.notes
      }
    });
  }

  async getSchedules(userId: number): Promise<Schedule[]> {
    return this.prisma.schedule.findMany({
      where: { userId },
    });
  }
}
