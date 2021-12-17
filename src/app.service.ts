import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World nestjs';
  }

  getHello2(): string {
    return 'Hello World nestjs 2';
  }
}
