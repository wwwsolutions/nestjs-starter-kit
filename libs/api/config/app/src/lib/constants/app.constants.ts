enum ApiType {
  GRAPHQL_API = 'GraphQL',
  REST_API = 'REST',
}

enum ApiIntegration {
  GRAPHQL_PRISMA = 'Graphql-Prisma-Integration',
  REST_MONGOOSE = 'Rest-Mongoose-Integration',
}

enum IntegrationLabel {
  GPI = 'GPI',
  RMI = 'RMI',
}

export enum ApiProtocol {
  HTTP = 'http',
  HTTPS = 'https',
}

export enum Hostname {
  LOOPBACK = '127.0.0.1',
  LOCALHOST = 'localhost',
}

export enum Prefix {
  GRAPHQL = 'graphql',
  REST = 'api',
}

// INTEGRATIONS

export type Integration<
  T = ApiType,
  I = ApiIntegration,
  L = IntegrationLabel,
  P = Prefix
> = {
  type: T;
  integration: I;
  label: L;
  prefix: P;
};

export const graphqlPrisma: Integration = {
  type: ApiType.GRAPHQL_API,
  integration: ApiIntegration.GRAPHQL_PRISMA,
  label: IntegrationLabel.GPI,
  prefix: Prefix.GRAPHQL,
};

export const restMongoose: Integration = {
  type: ApiType.REST_API,
  integration: ApiIntegration.REST_MONGOOSE,
  label: IntegrationLabel.RMI,
  prefix: Prefix.REST,
};
