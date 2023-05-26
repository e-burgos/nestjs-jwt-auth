import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'MongoDB Auth REST API, go to /api';
  }
}
