import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {
  }

  @Get()
  async findAll() {
    return this.productsService.findAll();
  }

  @Post()
  create(@Body() body: { name: string, description: string, price: number }) {
    return this.productsService.create(body.name, body.description, body.price)
  }

  @Delete(':id')
  deleteOne(@Param('id') id: number) {
    return this.productsService.deleteOne(+id)
  }
}
