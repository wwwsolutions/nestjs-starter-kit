import { Controller, Get } from '@nestjs/common';

@Controller('uptime')
export class ApiCoreController {
  @Get()
  uptime() {
    return process.uptime();
  }
}
