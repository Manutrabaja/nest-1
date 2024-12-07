import { Controller, Get, Param, Query, Post, Body, Put, Delete, HttpStatus, HttpCode, Res } from '@nestjs/common';
import {Response} from 'express';

@Controller('products')
export class ProductsController {

    // RUTA estatica filter
    @Get('filter')
    getFilter() {
        return { message: `I'm a filter 🔎` };
    }
    // de mandar un get con un parametro

         //  forma 1 
    // @Get(':id')
    // getProduct(@Param() params: any) {
    //     return `product ${params.id}`;
    // }


        // forma 2
    @Get('/:productoId')
    getProducts(@Param('productoId') productoId: string) {
        return { message: `product ${productoId}` 
        };
    }

        // Status Code http
    // @Get('/:productoId')
    // @HttpCode(HttpStatus.RESET_CONTENT)
    // getProducts(@Param('productoId') productoId: string) {
    //     return { message: `product ${productoId}` 
    //     };
    // }

        // Query command
    @Get()
    getProductos(
        @Query('limit') limit = 10,
        @Query('offset') offset = 0,
        @Query('brand') brand: string
    ) {
        return { message: `products: limit=> ${limit} offset=> ${offset} brand=> ${brand}` };
    }


        // Metodo POST
    @Post()
    create(@Body() payload: any) {
        return {
            menssage: 'accion de crear',
            payload,
        };
    }


        // Metodo Put
    @Put(':id')
    update(@Param('id') id: number, @Body() payload: any) {
        return {
            id,
            payload,
        };
    }


        // Metodo Delete
    @Delete(':id')
    deleteproduct(@Param('id') id : number){
        return id;
    }

}
