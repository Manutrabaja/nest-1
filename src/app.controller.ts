import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  
  @Get('hola')
  gethello() {
    return 'Hola como estas?';
  }


  // de mandar un get con un parametro

  //  forma 1 
  @Get('/product/:id')
  getProduct(@Param() params: any) {
    return `product ${params.id}`;
  }


  // forma 2
  @Get('/products/:productoId')
  getProducts(@Param('productoId') productoId: string) {
    return `product ${productoId}`;
  }


  //  2 endpoin al mismo tiempo
  @Get('categories/:id/products/:productoId')
  getCategory(@Param('productoId') productoId: string, @Param('id') id: string) {
    return `categories: ${id} and product: ${productoId}`;
  }


  //Query 
  @Get('/products')
  getProductos(
    @Query('limit') limit = 10,
    @Query('offset') offset = 0,
    @Query('brand') brand: string
  ) {
    return `products: limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }



}
