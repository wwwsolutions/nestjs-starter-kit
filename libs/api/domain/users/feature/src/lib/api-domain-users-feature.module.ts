import { Module } from '@nestjs/common';

import {
  ApiDomainUsersDataAccessModule,
  UsersService,
} from '@wwwsolutions/api/domain/users/data-access';

import { ApiDataAccessCoreModule } from '@wwwsolutions/api/data-access/core';

import { UsersResolver } from './users.resolver';

@Module({
  imports: [ApiDataAccessCoreModule, ApiDomainUsersDataAccessModule],
  providers: [UsersResolver, UsersService],
})
export class ApiDomainUsersFeatureModule {}
