import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ApiCoreModule } from '@wwwsolutions/api/core';

@Module({
  imports: [ApiCoreModule],
})
export class AppModule {}
