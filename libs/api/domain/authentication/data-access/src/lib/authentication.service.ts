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
    // this.logger.log(userLoginInput);

    // find user
    const found = await this.data.findUserByEmail(email);

    if (!found) {
      throw new NotFoundException(`User with email ${email} does not exist`);
    }

    // this.logger.log(found);

    // validate password
    const isPasswordValid = await AuthenticationUtils.validate(
      password,
      found.password
    );

    if (!isPasswordValid) {
      throw new Error(`Invalid password`);
    }

    // this.logger.log(isPasswordValid);

    // sign token
    const signedToken = this.signToken(found.id);

    // compose return object
    const userToken = { user: found, token: signedToken };

    // this.logger.log(userToken);

    return userToken;
  }

  // REGISTER USER
  async register({ email, password }: UserRegisterInput): Promise<UserToken> {
    // this.logger.log(userRegisterInput.email);

    // make sure email is unique, check database
    const found = await this.data.findUserByEmail(email);

    if (found) {
      throw new BadRequestException(`Cannot register with email ${email}`);
    }

    // this.logger.log(found);

    // hash password
    const hashedPassword = await AuthenticationUtils.hash(password);

    // this.logger.log(hashedPassword);

    // create and return new user with hashed pwd
    // const created = await this.data.user.create({
    //   data: { email, password: hashedPassword },
    // });
    const created = await this.data.createUser({
      data: { email, password: hashedPassword },
    });

    // this.logger.log(created);

    // sign token
    const signedToken = this.signToken(created.id);

    // compose return object
    const userToken = { user: created, token: signedToken };

    // this.logger.log(userToken);

    return userToken;
  }

  // HELPER METHODS

  // VALIDATE USER
  async validateUser(userId: number): Promise<User | null> {
    // TODO: check if user credentials has expired

    const validated = await this.usersService.user({ where: { id: userId } });

    // this.logger.log(validated);

    return validated;
  }

  async validateUserByEmailAndPassword(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _email: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _password: string
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

    // this.logger.log(signed);

    return signed;
  }
}
