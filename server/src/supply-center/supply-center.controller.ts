import { Controller, Get } from '@nestjs/common';
import { SupplyCenterService } from './supply-center.service';

@Controller('supply-center')
export class SupplyCenterController {
  constructor(private supplyCenterService: SupplyCenterService) {
  }

  @Get()
  async findAll() {
    return this.supplyCenterService.findAll()
  }
}
