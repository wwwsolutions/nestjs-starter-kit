/* eslint-disable @typescript-eslint/no-non-null-assertion */
// https://notiz.dev/blog/how-to-connect-nestjs-with-prisma

import {
  INestApplication,
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';

import {
  InjectEnvironmentConfig,
  EnvironmentConfiguration,
  // InjectAdminConfig,
  // AdminConfiguration,
  Env,
} from '@wwwsolutions/api/config/app';

import {
  InjectPrismaConfig,
  PrismaConfiguration,
  PrismaLogLevel,
} from '@wwwsolutions/api/config/features';

import { PrismaClient } from '@wwwsolutions/api/data-access/prisma';

// import {
//   CreateOneUserArgs,
//   FindManyUserArgs,
//   User,
//   UserCreateInput,
// } from '@wwwsolutions/api/data-access/models';

/**
   
  Service extends `PrismaClient` with additional custom logic
   
  */
@Injectable()
export class PrismaDataService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(PrismaDataService.name);

  // private readonly defaultAdmin: UserCreateInput | undefined;

  constructor(
    //  @InjectAdminConfig()
    //  private readonly adminConfiguration: AdminConfiguration

    @InjectEnvironmentConfig()
    readonly environmentConfiguration: EnvironmentConfiguration,

    @InjectPrismaConfig()
    readonly prismaConfiguration: PrismaConfiguration
  ) {
    super({
      datasources: prismaConfiguration.schemaDatasourcesUrlOverride,
      log:
        environmentConfiguration.env === Env.DEVELOPMENT
          ? [PrismaLogLevel.QUERY, PrismaLogLevel.ERROR, PrismaLogLevel.WARN]
          : [PrismaLogLevel.ERROR],
      errorFormat:
        environmentConfiguration.env === Env.DEVELOPMENT ? 'pretty' : 'minimal',
    });

    // this.defaultAdmin = this.adminConfiguration.admin.defaultAdmin;

    // this.logger.log(
    //   `🔶 Load default admin user from .env via adminConfiguration, '${this.defaultAdmin.email}'`
    // );

    this.logger.log(this.prismaConfiguration.schemaDatasourcesUrlOverride);
  }

  /**
   * Connect to the database when the module is initialized.
   */
  async onModuleInit(): Promise<void> {
    await this.$connect();
    this.logger.log(`🔶 Prisma connected`);
    // await this.ensureDefaultAdminUser();
  }

  /**
   * Disconnect from the database when the application is shutting down.
   */
  async onModuleDestroy(): Promise<void> {
    this.logger.log(`🔶 Prisma disconnected`);
    await this.$disconnect(); // `PrismaClient` method
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      this.logger.log(`🔶 App closed`);
      await app.close();
    });
  }

  // async findManyUsers({ orderBy }: FindManyUserArgs): Promise<User[]> {
  //   const found = await this.user.findMany({ orderBy }); // `PrismaClient` method
  //   this.logger.log(`🔶 findManyUsers, '${found.map((user) => user.id)}'`);
  //   return found;
  // }

  // // CRETE SINGLE USER
  // async createUser(createOneUserArgs: CreateOneUserArgs): Promise<User> {
  //   const created = await this.user.create(createOneUserArgs); // `PrismaClient` method
  //   this.logger.log(`🔶 createUser, '${created.id}', '${created.email}'`);
  //   return created;
  // }

  // async findUserByEmail(email: string): Promise<User | null> {
  //   const found = await this.user.findUnique({ where: { email } }); // `PrismaClient` method
  //   this.logger.log(`🔶 findUserByEmail, '${found?.email}'`);
  //   return found;
  // }

  // async findUserById(id: number): Promise<User | null> {
  //   const found = await this.user.findUnique({ where: { id } }); // `PrismaClient` method
  //   this.logger.log(`🔶 findUserById, '${found?.id}'`);
  //   return found;
  // }

  // // [HELPER METHODS]

  // /**
  //  * Ensures that default admin user exists in database,
  //  * if not, it creates one from from data stored in .env
  //  */
  // private async ensureDefaultAdminUser(): Promise<boolean> {
  //   // Check if default admin user exists in database
  //   const found = await this.findUserByEmail(this.defaultAdmin!.email);

  //   if (found) {
  //     this.logger.log(`🤓 Existing default admin user: '${found.email}'`);
  //     return true;
  //   }

  //   // Default admin user does not exist in database, create it
  //   const created = await this.createUser({
  //     data: this.defaultAdmin!,
  //   });

  //   this.logger.log(`🤓 Created default admin user: '${created.email}'`);

  //   return true;
  // }
}
