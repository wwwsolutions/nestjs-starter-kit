import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import {
  JwtConfiguration,
  jwtConfiguration,
} from '@wwwsolutions/api/config/features';

import { ApiDataAccessCoreModule } from '@wwwsolutions/api/data-access/core';

import { AuthenticationService } from '@wwwsolutions/api/domain/authentication/data-access';

import { UsersService } from '@wwwsolutions/api/domain/users/data-access';

import { AuthResolver } from './resolvers/auth.resolver';

import { JwtStrategy } from './strategies/jwt.strategy';

import { GqlAuthGuard } from './guards/gql-auth.guard';

@Module({
  imports: [
    ApiDataAccessCoreModule,
    JwtModule.registerAsync({
      useFactory: async (jwtConfiguration: JwtConfiguration) => ({
        // api/config/features/src/lib/configs/jwt.configuration.ts
        ...jwtConfiguration.options,
      }),
      inject: [jwtConfiguration.KEY],
    }),
  ],
  providers: [
    AuthenticationService,
    UsersService,
    JwtStrategy,
    AuthResolver,
    GqlAuthGuard,
  ],
})
export class ApiDomainAuthenticationFeatureModule {}
