// source: https://www.youtube.com/watch?v=Tj59gcgYOdg

import { UnauthorizedException, Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import { AuthenticationService } from '@wwwsolutions/api/domain/authentication/data-access';

import { User } from '@prisma/client';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(LocalStrategy.name);

  constructor(private readonly auth: AuthenticationService) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, password: string): Promise<User> {
    const validated = await this.auth.validateUserByEmailAndPassword(
      email,
      password
    );

    if (!validated) {
      throw new UnauthorizedException();
    }

    this.logger.log(validated);

    return validated;
  }
}
