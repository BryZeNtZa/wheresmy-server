import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { DatabaseConfig } from './config-database';
import { GeoController } from './controllers/geo.controller';
import { GeoService } from './services/geo.service';

@Module({
  imports: [TypeOrmModule.forRoot(DatabaseConfig)],
  controllers: [GeoController],
  providers: [GeoService],
})
export class GeoModule {
  constructor(private dataSource: DataSource) {}
}
