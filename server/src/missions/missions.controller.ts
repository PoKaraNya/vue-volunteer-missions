import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MissionsService } from './missions.service';
import type { MissionType } from '@prisma/client';

@Controller('missions')
export class MissionsController {
  constructor(private missionsService: MissionsService) {
  }

  @Get()
  async findAll() {
    return this.missionsService.findAll();
  }

  @Post()
  create(@Body() body: {supplyCenterId: number, hotPlaceId: number, type: MissionType }) {
    return this.missionsService.create(body.supplyCenterId, body.hotPlaceId, body.type);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: number) {
    return this.missionsService.deleteOne(+id);
  }
}
