import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from './../entities/country.entity';
import { City } from './../entities/city.entity';

@Injectable()
export class GeoService {
  constructor(
    @InjectRepository(Country)
    private countryRepository: Repository<Country>,
    @InjectRepository(Country)
    private cityRepository: Repository<City>,
  ) {}

  countries(): Promise<Country[]> {
    return this.countryRepository.find();
  }

  cities(country_id: number): Promise<City[]> {
    return this.cityRepository.findBy({ country_id });
  }
}
