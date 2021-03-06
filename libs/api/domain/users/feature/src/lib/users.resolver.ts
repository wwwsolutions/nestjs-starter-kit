import { Args, Query, Resolver } from '@nestjs/graphql';
import { UseFilters, UseGuards } from '@nestjs/common';

import { UsersService } from '@wwwsolutions/api/domain/users/data-access';

import { GqlAuthGuard } from '@wwwsolutions/api/domain/authentication/feature';

import {
  User,
  FindManyUserArgs,
  FindUniqueUserArgs,
} from '@wwwsolutions/api/data-access/models';
import { HttpExceptionFilter } from '@wwwsolutions/shared/utils';

// [PROTECTED/RESTRICTED API]
@UseGuards(GqlAuthGuard)
@UseFilters(HttpExceptionFilter)
@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  // GET SINGLE USER
  @Query(() => User, { nullable: true })
  async user(@Args() args: FindUniqueUserArgs): Promise<User | null> {
    return await this.usersService.user(args);
  }

  // GET MULTIPLE USERS
  @Query(() => [User], { nullable: true })
  async users(@Args() args: FindManyUserArgs): Promise<User[]> {
    return await this.usersService.users(args);
  }
}
