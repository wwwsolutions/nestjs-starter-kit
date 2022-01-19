/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { PrismaDataService } from '@wwwsolutions/api/data-access/core';

import { AuthenticationUtils } from '@wwwsolutions/shared/utils';

import { User } from '@wwwsolutions/api/data-access/models';

import {
  UserToken,
  UserLoginInput,
  UserRegisterInput,
} from '@wwwsolutions/api/domain/users/data-access';

import { UsersService } from '@wwwsolutions/api/domain/users/data-access';

import { Jwt } from './models/jwt.model';

@Injectable()
export class AuthenticationService {
  private readonly logger = new Logger(AuthenticationService.name);

  constructor(
    private readonly data: PrismaDataService,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  // LOGIN USER
  async login({ email, password }: UserLoginInput): Promise<UserToken> {
    // find user
    const found = await this.data.findUserByEmail(email);

    if (!found) {
      throw new NotFoundException(`User with email ${email} does not exist`);
    }

    // validate password
    const isPasswordValid = await AuthenticationUtils.validate(
      password,
      found.password
    );

    if (!isPasswordValid) {
      throw new Error(`Invalid password`);
    }

    // sign token
    const signedToken = this.signToken(found.id);

    // compose return object
    const userToken = { user: found, token: signedToken };

    return userToken;
  }

  // REGISTER USER
  async register({ email, password }: UserRegisterInput): Promise<UserToken> {
    // make sure email is unique, check database
    const found = await this.data.findUserByEmail(email);

    if (found) {
      throw new BadRequestException(`Cannot register with email ${email}`);
    }

    // hash password
    const hashedPassword = await AuthenticationUtils.hash(password);

    // create and return new user with hashed pwd
    const created = await this.data.createUser({
      data: { email, password: hashedPassword },
    });

    // sign token
    const signedToken = this.signToken(created.id);

    // compose return object
    const userToken = { user: created, token: signedToken };

    return userToken;
  }

  // [HELPER METHODS]

  // VALIDATE USER
  async validateUser(userId: number): Promise<User | null> {
    // TODO: check if user credentials has expired

    const validated = await this.usersService.user({ where: { id: userId } });

    return validated;
  }

  async validateUserByEmailAndPassword(
    email: string,
    password: string
  ): Promise<User | null> {
    throw new Error('Method not implemented.');
  }

  // SIGN TOKEN
  signToken(userId: number): string {
    const payload: Jwt = {
      userId,
      // TODO: extend token with metadata. example: role or isAdmin
    };

    const signed = this.jwtService.sign(payload);

    return signed;
  }
}
