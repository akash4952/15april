import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { identity } from 'rxjs';
import {ProductService } from './product.service';
@Controller('product')
export class ProductController {
    constructor(private readonly ProductService:ProductService)
    {}

    @Post()
    addProduct(
        @Body('title') prodTitle:string,
        @Body('description') prodDesc:string,
        @Body('price') prodPrice:number
        ):any {
            const d=this.ProductService.insertProduct(prodTitle,prodDesc,prodPrice);
            return { id:d};

        }

    @Get()
    getAllProducts(){
        return this.ProductService.getProduct();
    }

    @Get(':id')
    getProduct(@Param('id') prodId:string){
        const product=this.ProductService.getProductById(prodId)
    }
}

