export enum ApiType {
  GRAPHQL_API = 'GraphqlApi',
  REST_API = 'RestApi',
}

export enum GlobalPrefix {
  GRAPHQL = 'graphql',
  API = 'api',
}

export enum Integration {
  GRAPHQL_PRISMA = 'Graphql-Prisma-Integration',
  REST_MONGOOSE = 'Rest-Mongoose-Integration',
}

export enum IntegrationLabel {
  GPI = 'GPI',
  RMI = 'RMI',
}

export enum Protocols {
  HTTP = 'http',
  HTTPS = 'https',
}

export enum Hostname {
  LOOPBACK = '127.0.0.1',
  LOCALHOST = 'localhost',
}
