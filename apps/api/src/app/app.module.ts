import { Module } from '@nestjs/common';

import { ApiCoreModule } from '@wwwsolutions/api/core';

@Module({
  imports: [ApiCoreModule],
})
export class AppModule {}
