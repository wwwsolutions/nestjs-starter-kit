import { Injectable, Logger } from '@nestjs/common';

import { PrismaDataService } from '@wwwsolutions/api/data-access/core';

import {
  FindManyUserArgs,
  FindUniqueUserArgs,
  User,
} from '@wwwsolutions/api/data-access/models';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(private readonly data: PrismaDataService) {}

  // GET SINGLE USER
  async user({ where: { id } }: FindUniqueUserArgs): Promise<User | null> {
    return await this.data.findUserById(id as number);
  }

  // GET MULTIPLE USERS
  async users(findManyUserArgs: FindManyUserArgs): Promise<User[]> {
    return await this.data.findManyUsers(findManyUserArgs);
  }
}
