export enum ApiType {
  GRAPHQL_API = 'GraphqlApi',
  REST_API = 'RestApi',
}

export enum GlobalPrefix {
  GRAPHQL = 'graphql',
  API = 'api',
}

export enum ApiIntegrationType {
  GRAPHQL_PRISMA_INTEGRATION = 'Graphql-Prisma-Integration',
  REST_MONGOOSE_INTEGRATION = 'Rest-Mongoose-Integration',
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
