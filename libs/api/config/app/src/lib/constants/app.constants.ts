enum ApiType {
  GRAPHQL = 'GraphQL',
  REST = 'REST',
}

enum ApiIntegration {
  GRAPHQL_PRISMA = 'Graphql-Prisma-Integration',
  REST_MONGOOSE = 'Rest-Mongoose-Integration',
}

enum ApiIntegrationLabel {
  GPI = 'GPI',
  RMI = 'RMI',
}

export enum ApiProtocol {
  HTTP = 'http',
  HTTPS = 'https',
}

export enum ApiHostname {
  LOOPBACK = '127.0.0.1',
  LOCALHOST = 'localhost',
}

export enum Prefix {
  GRAPHQL = 'graphql',
  REST = 'api',
}

enum ApiPort {
  DEFAULT = 3000,
}

// API
type Api<PR = ApiProtocol, HO = ApiHostname, PO = ApiPort> = {
  protocol: PR;
  hostname: HO;
  port: PO;
};

type GraphqlApiType = Pick<Integration<ApiType.GRAPHQL>, 'type'>;
export const graphqlApiType: GraphqlApiType = { type: ApiType.GRAPHQL };

type RestApiType = Pick<Integration<ApiType.REST>, 'type'>;
export const restApiType: RestApiType = { type: ApiType.REST };

type Http = Pick<Api<ApiProtocol.HTTP>, 'protocol'>;
export const http: Http = { protocol: ApiProtocol.HTTP };

console.log('>>>>>>>>>', graphqlApiType.type, restApiType.type);

// INTEGRATIONS
export type Integration<
  T = ApiType,
  I = ApiIntegration,
  L = ApiIntegrationLabel,
  P = Prefix
> = {
  type: T;
  integration: I;
  label: L;
  prefix: P;
};

export const graphqlPrisma: Integration = {
  type: ApiType.GRAPHQL,
  integration: ApiIntegration.GRAPHQL_PRISMA,
  label: ApiIntegrationLabel.GPI,
  prefix: Prefix.GRAPHQL,
};

export const restMongoose: Integration = {
  type: ApiType.REST,
  integration: ApiIntegration.REST_MONGOOSE,
  label: ApiIntegrationLabel.RMI,
  prefix: Prefix.REST,
};
