import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { UsersService } from '@users/services/users.service';
import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Post('user/:id')
  async login(@Request() req) {
    return this.usersService.findOne(req.id);
  }
}
