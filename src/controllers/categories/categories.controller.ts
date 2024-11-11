import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

    //  2 endpoin al mismo tiempo
    @Get('/:id/products/:productoId')
    getCategory(@Param('productoId') productoId: string, @Param('id') id: string) 
    {
        return `categories: ${id} and product: ${productoId}`;
    }


}