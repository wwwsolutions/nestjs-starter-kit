import { Module } from '@nestjs/common';

import { AuthenticationService } from './authentication.service';

import { UsersService } from '@wwwsolutions/api/domain/users/data-access';

@Module({
  providers: [UsersService, AuthenticationService],
  // exports: [UsersService, AuthenticationService],
  exports: [AuthenticationService],
})
export class ApiDomainAuthenticationDataAccessModule {}
