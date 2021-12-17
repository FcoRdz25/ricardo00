import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';

@Injectable()
export class ProductService {
  product = [
    {
      "id": 1,
      "name": "producto01",
      "price": 10
    },
    {
      "id": 2,
      "name": "producto02",
      "price": 15
    },
    {
      "id": 3,
      "name": "producto03",
      "price": 20
    }
  ];

  getProduct(){
    return this.product;
  }

  findOne( id: string ){
    const product = this.product.find(p => {
      if(p.id === Number(id)){
        return p;
      }
    });
    return product;
  }

  addOne(product: CreateProductDTO){
    const producto = this.product.find(p=> p.id === product.id)
    if(!producto){
      this.product.push( product );
    }else{
      console.log("id repetido");
    }
    return this.product;
  }

  deleteOne(id: string){

    const existe = this.product.find(p  => p.id === Number(id));
    if(!existe){
      return false;
    }

    this.product = this.product.filter(p  => p.id !== Number(id));
    return true;
  }
}

