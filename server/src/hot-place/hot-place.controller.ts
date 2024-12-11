import { Controller, Get } from '@nestjs/common';
import { HotPlaceService } from './hot-place.service';

@Controller('hot-place')
export class HotPlaceController {
  constructor(private hotPlaceService: HotPlaceService) {
  }

  @Get()
  async findAll() {
    return this.hotPlaceService.findAll();
  }
}
