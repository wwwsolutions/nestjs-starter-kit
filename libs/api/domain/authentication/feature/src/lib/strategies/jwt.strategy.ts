import { UnauthorizedException, Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import {
  AuthenticationService,
  Jwt,
} from '@wwwsolutions/api/domain/authentication/data-access';

import {
  InjectJwtConfig,
  JwtConfiguration,
} from '@wwwsolutions/api/config/features';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(JwtStrategy.name);

  constructor(
    @InjectJwtConfig()
    readonly jwtConfiguration: JwtConfiguration,

    private readonly auth: AuthenticationService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // api/config/features/src/lib/configs/jwt.configuration.ts
      secretOrKey: jwtConfiguration.secret,
    });
  }

  async validate(payload: Jwt) {
    // this.logger.log(payload);

    const validated = await this.auth.validateUser(payload.userId);

    if (!validated) {
      throw new UnauthorizedException();
    }

    // this.logger.log(validated);

    return validated;
  }
}
