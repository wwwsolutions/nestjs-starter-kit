import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ApiConfigAppModule } from '@wwwsolutions/api/config/app';

import {
  ApiConfigFeaturesModule,
  mongoConfiguration,
  MongoConfiguration,
} from '@wwwsolutions/api/config/features';

@Module({
  imports: [
    ApiConfigAppModule,
    ApiConfigFeaturesModule,

    // DATA-LAYER CONFIGURATION
    MongooseModule.forRootAsync({
      useFactory: async ({ uri }: MongoConfiguration) => ({
        uri,
      }),
      inject: [mongoConfiguration.KEY],
    }),
  ],
})
export class ApiIntegrationRestMongooseModule {}
