import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@entity/user.entity';
import { Credentials } from '@entity/credentials.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Credentials)
    private credentialsRepository: Repository<Credentials>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(key: string, secret: string): Promise<User> {
    const credentials = await this.findOne(key, secret);
    if (credentials && credentials.user) {
      return credentials.user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  findOne(key: string, secret: string): Promise<Credentials> {
    return this.credentialsRepository.findOneBy({ key, secret });
  }
}
