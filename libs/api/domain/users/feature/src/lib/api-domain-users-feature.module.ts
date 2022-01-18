import { Module } from '@nestjs/common';

// import { ApiGraphqlUsersDataAccessModule } from '@wwwsolutions/api/graphql/users/data-access';
import {
  ApiDomainUsersDataAccessModule,
  UsersService,
} from '@wwwsolutions/api/domain/users/data-access';

// import { ApiGraphqlDataAccessCoreModule } from '@wwwsolutions/api/graphql/data-access/core';
import { ApiDataAccessCoreModule } from '@wwwsolutions/api/data-access/core';

import { UsersResolver } from './users.resolver';

@Module({
  // imports: [ApiGraphqlDataAccessCoreModule, ApiGraphqlUsersDataAccessModule],
  imports: [ApiDataAccessCoreModule, ApiDomainUsersDataAccessModule],
  providers: [UsersResolver, UsersService],
})
export class ApiDomainUsersFeatureModule {}
