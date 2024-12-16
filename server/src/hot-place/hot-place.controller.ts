import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { HotPlaceService } from './hot-place.service';

@Controller('hot-place')
export class HotPlaceController {
  constructor(private hotPlaceService: HotPlaceService) {
  }

  @Get()
  async findAll() {
    return this.hotPlaceService.findAll();
  }

  @Post()
  create(@Body() body: { name: string, latitude: number, longitude: number }) {
    return this.hotPlaceService.create(body.name, body.latitude, body.longitude)
  }

  @Delete(':id')
  deleteOne(@Param('id') id: number) {
    return this.hotPlaceService.deleteOne(+id)
  }
}
