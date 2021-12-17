import { Body, Controller, Delete, Get, Param, Post, Query, Res } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor( private productService: ProductService ){}

  @Get()
  findAll(@Res() res){
    const resp = this.productService.getProduct()
    return res.json( resp );
  } 

  @Get(':id')
  findOne(@Res() res, @Param('id') id: string){
    console.log( id );
    const product = this.productService.findOne(id);
    console.log(product);
    return res.json( {
      ok: true,
      id,
      producto:product
    } );
  }
  
  @Post()
  create(@Res() res, @Body() productDTO:CreateProductDTO){
    console.log(productDTO)

    const newProduct: CreateProductDTO = {
      name: productDTO.name,
      id: productDTO.id,
      price: productDTO.price
    };

    const products = this.productService.addOne(newProduct);

    return res.json({
      ok: true,
      products: products
    });
  }

  @Delete()
  deleteOne(@Res() res, @Query('id') id:string){
  
    const resp = this.productService.deleteOne(id);
    let mensaje = '';
    
    if(resp){
      mensaje = `Borrado producto id: ${id}`;
    }else{
      mensaje = 'No existe ID';
    }

    return res.json({
      ok: resp,
      id,
      mensaje
    });
  }


}
