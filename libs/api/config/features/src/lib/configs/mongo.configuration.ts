import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';

export const mongoConfiguration = registerAs('mongo', () => ({
  user: process.env.MONGO_INITDB_ROOT_USERNAME as string,
  password: process.env.MONGO_INITDB_ROOT_PASSWORD as string,
  hostname: process.env.MONGO_HOSTNAME as string,
  dbName: process.env.MONGO_DB_NAME as string,
  port: Number(process.env.MONGO_PORT),

  get uri(): string {
    return `mongodb://${this.hostname}:${this.port}`;
  },
}));

export type MongoConfiguration = ConfigType<typeof mongoConfiguration>;

export const InjectMongoConfig = () => Inject(mongoConfiguration.KEY);
