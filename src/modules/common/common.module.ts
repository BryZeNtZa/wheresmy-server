import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/controllers/auth.controller';
import { AuthService } from './auth/services/auth.service';
import { UsersController } from './users/controllers/users.controller';
import { UsersService } from './users/services/users.service';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AuthController, UsersController],
  providers: [AuthService, UsersService],
})
export class CommonModule {}
