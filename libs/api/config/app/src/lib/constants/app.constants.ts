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

export enum ApiIntegrationTypeLabel {
  GPI = 'GPI',
  RMI = 'RMI',
}

export enum ApiProtocols {
  HTTP = 'http',
  HTTPS = 'https',
}

export enum ApiHostname {
  LOOPBACK = '127.0.0.1',
  LOCALHOST = 'localhost',
}
