import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
  ApiConfigIntegrationsModule,
  mongoConfiguration,
  MongoConfiguration,
} from '@wwwsolutions/api/config/integrations';

import { ApiConfigFeaturesModule } from '@wwwsolutions/api/config/features';

@Module({
  imports: [
    ApiConfigIntegrationsModule,
    ApiConfigFeaturesModule,

    // DATA-LAYER CONFIGURATION
    MongooseModule.forRootAsync({
      useFactory: async ({ uri, dbName }: MongoConfiguration) => ({
        uri,
        dbName,
      }),
      inject: [mongoConfiguration.KEY],
    }),
  ],
})
export class ApiIntegrationRestMongooseFeatureModule {}
