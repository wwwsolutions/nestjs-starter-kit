/* eslint-disable @typescript-eslint/no-non-null-assertion */
// https://notiz.dev/blog/how-to-connect-nestjs-with-prisma

import {
  INestApplication,
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';

import { Env, PrismaLogLevel } from '@wwwsolutions/api/common/types';

import {
  InjectEnvironmentConfig,
  EnvironmentConfiguration,
  InjectChalkConfig,
  ChalkConfiguration,
} from '@wwwsolutions/api/config/app';

import {
  InjectPrismaConfig,
  PrismaConfiguration,
} from '@wwwsolutions/api/config/integrations';

import {
  InjectAdminConfig,
  AdminConfiguration,
} from '@wwwsolutions/api/config/features';

import { PrismaClient } from '@wwwsolutions/api/data-access/prisma';

import {
  CreateOneUserArgs,
  FindManyUserArgs,
  User,
  UserCreateInput,
} from '@wwwsolutions/api/data-access/models';

/**
 * Service extends `PrismaClient` with additional custom logic
 * Import it into other services.
 */
@Injectable()
export class PrismaDataService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(this.chalk.info(PrismaDataService.name));

  private readonly defaultAdmin: UserCreateInput | undefined;

  constructor(
    @InjectChalkConfig()
    private readonly chalk: ChalkConfiguration,

    @InjectEnvironmentConfig()
    readonly environmentConfiguration: EnvironmentConfiguration,

    @InjectAdminConfig()
    private readonly adminConfiguration: AdminConfiguration,

    @InjectPrismaConfig()
    readonly prismaConfiguration: PrismaConfiguration
  ) {
    super({
      datasources:
        environmentConfiguration.env === Env.PRODUCTION
          ? prismaConfiguration.prodSchemaDatasourcesUrlOverride
          : prismaConfiguration.devSchemaDatasourcesUrlOverride,
      log:
        environmentConfiguration.env === Env.PRODUCTION
          ? [PrismaLogLevel.ERROR]
          : [PrismaLogLevel.QUERY, PrismaLogLevel.ERROR, PrismaLogLevel.WARN],
      errorFormat:
        environmentConfiguration.env === Env.PRODUCTION ? 'minimal' : 'pretty',
    });

    this.defaultAdmin = this.adminConfiguration.admin.defaultAdmin;

    this.logData(
      { email: this.defaultAdmin.email },
      'Load default admin user from .env via adminConfiguration'
    );

    environmentConfiguration.env === Env.PRODUCTION
      ? this.logData(
          this.prismaConfiguration.prodSchemaDatasourcesUrlOverride,
          'datasource config'
        )
      : this.logData(
          this.prismaConfiguration.devSchemaDatasourcesUrlOverride,
          'datasource config'
        );
  }

  /**
   * Connect to the database when the module is initialized.
   */
  async onModuleInit(): Promise<void> {
    await this.$connect();
    this.logEvent('connected');
    await this.ensureDefaultAdminUser();
  }

  /**
   * Disconnect from the database when the application is shutting down.
   */
  async onModuleDestroy(): Promise<void> {
    this.logEvent('disconnected');
    await this.$disconnect(); // `PrismaClient` method
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      this.logEvent('app closed');
      await app.close();
    });
  }

  async findManyUsers({ orderBy }: FindManyUserArgs): Promise<User[]> {
    const found = await this.user.findMany({ orderBy }); // `PrismaClient` method
    this.logData(
      found.map((user: { id: unknown }) => user.id),
      'findManyUsers'
    );
    return found;
  }

  // CREATE SINGLE USER
  async createUser(createOneUserArgs: CreateOneUserArgs): Promise<User> {
    const created = await this.user.create(createOneUserArgs); // `PrismaClient` method
    this.logData({ id: created.id, email: created.email }, 'createUser');
    return created;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const found = await this.user.findUnique({ where: { email } }); // `PrismaClient` method
    this.logData({ email: found?.email }, 'findUserByEmail');
    return found;
  }

  async findUserById(id: number): Promise<User | null> {
    const found = await this.user.findUnique({ where: { id } }); // `PrismaClient` method
    this.logData({ id: found?.id }, 'findUserById');
    return found;
  }

  // [HELPER METHODS]

  /**
   * Ensures that default admin user exists in database,
   * if not, it creates one from from data stored in .env
   */
  private async ensureDefaultAdminUser(): Promise<boolean> {
    // Check if default admin user exists in database
    const found = await this.findUserByEmail(this.defaultAdmin!.email);

    if (found) {
      this.logData({ email: found.email }, 'Existing default admin user found');
      return true;
    }

    // Default admin user does not exist in database, create it
    const created = await this.createUser({
      data: this.defaultAdmin!,
    });
    this.logData({ email: created.email }, 'Created default admin user');
    return true;
  }

  logData(data: unknown, msg: string): void {
    this.logger.log(
      `🔶 ${this.chalk.result.inverse(
        `${this.chalk.warning(
          `${this.environmentConfiguration.env} mode:`
        )} ${msg}, '${JSON.stringify(data)}'`
      )}`
    );
  }

  logEvent(evt: string): void {
    this.logger.log(
      `🔶 ${this.chalk.success.inverse(
        `${this.chalk.warning(
          `${this.environmentConfiguration.env} mode:`
        )} ${evt}`
      )}`
    );
  }
}
