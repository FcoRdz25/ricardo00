import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // ruta
  @Get('/') 
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('/hola') 
  // getHello2(): string {
  //   return this.appService.getHello2();
  // }

  // // forma no recomendable
  // @Get('/hola3') 
  // getHello3(): string {
  //   return "hola mundo 3";
  // }

}
