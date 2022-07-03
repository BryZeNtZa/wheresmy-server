import { Controller, Get, Param } from '@nestjs/common';
import { GeoService } from './../services/geo.service';

@Controller('/geo')
export class GeoController {
  constructor(private readonly geoService: GeoService) {}

  @Get('/countries')
  async countries() {
    return this.geoService.countries();
  }

  @Get('/cities/:country_id')
  async cities(@Param('country_id') country_id) {
    return this.geoService.cities(country_id);
  }
}
