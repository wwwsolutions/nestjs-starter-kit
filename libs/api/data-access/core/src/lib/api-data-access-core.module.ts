import { Module } from '@nestjs/common';

import { PrismaDataService } from './prisma-data.service';

@Module({
  providers: [PrismaDataService],
  exports: [PrismaDataService],
})
export class ApiDataAccessCoreModule {}
