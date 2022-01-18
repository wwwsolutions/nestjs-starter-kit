import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';

import { AuthenticationUtils } from '@wwwsolutions/shared/utils';

import { UserCreateInput } from '@wwwsolutions/api/data-access/models';

export const adminConfiguration = registerAs('admin', async () => ({
  admin: {
    email: process.env.ADMIN_EMAIL as string,
    password: await AuthenticationUtils.hash(
      process.env.ADMIN_PASSWORD as string
    ),

    get defaultAdmin(): UserCreateInput {
      return {
        email: this.email,
        password: this.password,
      };
    },
  },
}));

export type AdminConfiguration = ConfigType<typeof adminConfiguration>;

export const InjectAdminConfig = () => Inject(adminConfiguration.KEY);
