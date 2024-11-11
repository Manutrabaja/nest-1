import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    // RUTA estatica filter
    @Get('/filter')
    getFilter() {
        return `I'm a filter 🔎`;
    }
    // de mandar un get con un parametro

    //  forma 1 
    @Get('/:id')
    getProduct(@Param() params: any) {
        return `product ${params.id}`;
    }


    // forma 2
    @Get('/:productoId')
    getProducts(@Param('productoId') productoId: string) {
        return `product ${productoId}`;
    }


    //Query 
    @Get('/')
    getProductos(
        @Query('limit') limit = 10,
        @Query('offset') offset = 0,
        @Query('brand') brand: string
    ) {
        return `products: limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
    }
    

    
}
