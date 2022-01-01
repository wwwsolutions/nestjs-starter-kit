import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export const jwtConfiguration = registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET,
  expiresIn: Number(process.env.JWT_SIGN_OPTIONS_EXPIRES_IN),

  get options(): JwtModuleOptions {
    return {
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: Number(process.env.JWT_SIGN_OPTIONS_EXPIRES_IN),
      },
    };
  },
}));

export type JwtConfiguration = ConfigType<typeof jwtConfiguration>;

export const InjectJwtConfig = () => Inject(jwtConfiguration.KEY);
