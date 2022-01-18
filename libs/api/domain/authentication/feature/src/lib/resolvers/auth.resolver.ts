import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { AuthenticationService } from '@wwwsolutions/api/domain/authentication/data-access';

import {
  UserToken,
  UserLoginInput,
  UserRegisterInput,
} from '@wwwsolutions/api/domain/users/data-access';

@Resolver()
export class AuthResolver {
  constructor(private readonly auth: AuthenticationService) {}

  // [PUBLIC API]

  // LOGIN USER
  @Mutation(() => UserToken)
  async login(
    @Args({ name: 'userLoginInput', type: () => UserLoginInput })
    userLoginInput: UserLoginInput
  ): Promise<UserToken> {
    return this.auth.login(userLoginInput);
  }

  // REGISTER USER
  @Mutation(() => UserToken)
  async register(
    @Args({ name: 'userRegisterInput', type: () => UserRegisterInput })
    userRegisterInput: UserRegisterInput
  ): Promise<UserToken> {
    return this.auth.register(userRegisterInput);
  }
}
