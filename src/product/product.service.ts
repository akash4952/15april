import { Injectable } from '@nestjs/common';


import { Product } from './product.model';

@Injectable()
export class ProductService {
      products:Product[]=[];

      insertProduct(title:string,description:string,price:number)
       {
       
         const prodId= Math.random().toString();     
         const newproduct = new Product(prodId,title,description,price);
         this.products.push(newproduct);
         return prodId;
           
            
    }

    getProduct(){
        return [...this.products];
    }


    getProductById(productId:string) {
        const product=this.products.find((prod=>prod.id==productId));
        return {...product};
        
    }

}
