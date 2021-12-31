import { Module } from '@nestjs/common';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ApiCoreModule } from '@wwwsolutions/api/core';

@Module({
  imports: [ApiCoreModule],
})
export class AppModule {}
