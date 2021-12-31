import { Module } from '@nestjs/common';
import { ApiCoreService } from './api-core.service';

@Module({
  controllers: [],
  providers: [ApiCoreService],
  exports: [ApiCoreService],
})
export class ApiCoreModule {}
