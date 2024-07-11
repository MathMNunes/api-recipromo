import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { Schedule } from '@prisma/client';

@Controller('schedules')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post()
  async createSchedule(@Body() data: {
    userId: number,
    type: string,
    date: string,
    time: string,
    notes?: string
  }): Promise<Schedule> {
    return this.scheduleService.createSchedule(data);
  }

  @Get(':userId')
  async getSchedules(@Param('userId') userId: string): Promise<Schedule[]> {
    return this.scheduleService.getSchedules(Number(userId));
  }
}
