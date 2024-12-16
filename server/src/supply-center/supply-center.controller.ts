import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { SupplyCenterService } from './supply-center.service';

@Controller('supply-center')
export class SupplyCenterController {
  constructor(private supplyCenterService: SupplyCenterService) {
  }

  @Get()
  findAll() {
    return this.supplyCenterService.findAll()
  }

  @Post()
  create(@Body() body: { name: string, latitude: number, longitude: number }) {
    return this.supplyCenterService.create(body.name, body.latitude, body.longitude)
  }

  @Delete(':id')
  deleteOne(id: number) {
    return this.supplyCenterService.deleteOne(id)
  }
}
