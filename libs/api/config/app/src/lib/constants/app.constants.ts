export enum ApiType {
  GRAPHQL_API = 'GraphQL',
  REST_API = 'REST',
}

export enum Integration {
  GRAPHQL_PRISMA = 'Graphql-Prisma-Integration',
  REST_MONGOOSE = 'Rest-Mongoose-Integration',
}

export enum Label {
  GPI = 'GPI',
  RMI = 'RMI',
}

export enum Protocol {
  HTTP = 'http',
  HTTPS = 'https',
}

export enum Hostname {
  LOOPBACK = '127.0.0.1',
  LOCALHOST = 'localhost',
}

export enum GlobalPrefix {
  GRAPHQL = 'graphql',
  API = 'api',
}

export type Api<
  T = ApiType,
  I = Integration,
  L = Label,
  P = Protocol,
  H = Hostname,
  GP = GlobalPrefix
> = {
  type: T;
  integration: I;
  label: L;
  protocol: P;
  hostname: H;
  port: number;
  domain: string;
  globalPrefix: GP;
  path: string;
};

export const graphqlPrisma: Partial<Api> = {
  type: ApiType.GRAPHQL_API,
  integration: Integration.GRAPHQL_PRISMA,
  label: Label.GPI,
};

export type GraphqlPrisma = typeof graphqlPrisma;

export const restMongoose: Partial<Api> = {
  type: ApiType.REST_API,
  integration: Integration.REST_MONGOOSE,
  label: Label.RMI,
};

export type RestMongoose = typeof restMongoose;
