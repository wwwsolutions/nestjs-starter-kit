import { Module } from '@nestjs/common';

// import { ApiGraphqlDataAccessCoreModule } from '@wwwsolutions/api/graphql/data-access/core';
import { ApiDataAccessCoreModule } from '@wwwsolutions/api/data-access/core';

import { UsersService } from './users.service';

@Module({
  // imports: [ApiGraphqlDataAccessCoreModule],
  imports: [ApiDataAccessCoreModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class ApiGraphqlUsersDataAccessModule {}

export class ApiDomainUsersDataAccessModule {}
