import { Module } from '@nestjs/common';

import { ApiDataAccessCoreModule } from '@wwwsolutions/api/data-access/core';

import { UsersService } from './users.service';

@Module({
  imports: [ApiDataAccessCoreModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class ApiDomainUsersDataAccessModule {}
