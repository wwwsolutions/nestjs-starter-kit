import { Module } from '@nestjs/common';

import { ApiDataAccessCoreModule } from '@wwwsolutions/api/data-access/core';

import { UsersService } from '@wwwsolutions/api/domain/users/data-access';

import { AuthenticationService } from './authentication.service';

@Module({
  imports: [ApiDataAccessCoreModule],
  providers: [AuthenticationService, UsersService],
  exports: [AuthenticationService],
})
export class ApiDomainAuthenticationDataAccessModule {}
