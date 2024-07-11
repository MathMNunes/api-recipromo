import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.userService.getUserById(Number(id));
  }

  @Post()
  async createUser(@Body() data: {
    name: string,
    cpf: string,
    email: string,
    password: string,
    cep: string,
    city: string,
    state: string,
    neighborhood: string,
    street: string,
    number: string
  }): Promise<User> {
    return this.userService.createUser(data);
  }
}
