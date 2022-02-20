// // API
// enum ApiType {
//   GRAPHQL = 'GraphQL',
//   REST = 'REST',
// }

// enum ApiIntegration {
//   GRAPHQL_PRISMA = 'Graphql-Prisma-Integration',
//   REST_MONGOOSE = 'Rest-Mongoose-Integration',
// }

// enum ApiIntegrationLabel {
//   GPI = 'GPI',
//   RMI = 'RMI',
// }

// export enum ApiProtocol {
//   HTTP = 'http',
//   HTTPS = 'https',
// }

// export enum ApiHostname {
//   LOOPBACK = '127.0.0.1',
//   LOCALHOST = 'localhost',
// }

// export enum Prefix {
//   GRAPHQL = 'graphql',
//   REST = 'api',
// }

// enum ApiPort {
//   DEFAULT = 3000,
// }

// // API
// type Api<PR = ApiProtocol, HO = ApiHostname, PO = ApiPort> = {
//   protocol: PR;
//   hostname: HO;
//   port: PO;
// };

// type ApiGraphql = Pick<Integration<ApiType.GRAPHQL>, 'type'>;
// export const apiGraphql: ApiGraphql = { type: ApiType.GRAPHQL };

// type ApiRest = Pick<Integration<ApiType.REST>, 'type'>;
// export const apiRest: ApiRest = { type: ApiType.REST };

// type Http = Pick<Api<ApiProtocol.HTTP>, 'protocol'>;
// export const http: Http = { protocol: ApiProtocol.HTTP };

// // INTEGRATIONS
// export type Integration<
//   T = ApiType,
//   I = ApiIntegration,
//   L = ApiIntegrationLabel,
//   P = Prefix
// > = {
//   type: T;
//   integration: I;
//   label: L;
//   prefix: P;
// };

// // ENVIRONMENT
// export enum Env {
//   PRODUCTION = 'production',
//   DEVELOPMENT = 'development',
//   STAGING = 'staging',
//   TEST = 'test',
// }

// // THEME
// export enum Colors {
//   blue = '#0d6efd',
//   indigo = '#6610f2',
//   purple = '#6f42c1',
//   pink = '#d63384',
//   red = '#dc3545',
//   orange = '#fd7e14',
//   yellow = '#ffc107',
//   green = '#198754',
//   teal = '#20c997',
//   cyan = '#0dcaf0',
//   gray = '#adb5bd',
//   black = '#000000',
// }

// // WINSTON
// export enum WinstonLogLevel {
//   ERROR = 'error',
//   WARN = 'warn',
//   INFO = 'info',
//   HTTP = 'http',
//   VERBOSE = 'verbose',
//   DEBUG = 'debug',
//   SILLY = 'silly',
// }

// // PRISMA
// export enum PrismaLogLevel {
//   ERROR = 'error',
//   WARN = 'warn',
//   INFO = 'info',
//   QUERY = 'query',
// }

// export enum PrismaProvider {
//   SQLITE = 'sqlite',
//   POSTGRESQL = 'postgresql',
//   MYSQL = 'mysql',
//   SQLSERVER = 'sqlserver',
//   MONGODB = 'mongodb',
//   COCKROACHDB = 'cockroachdb',
// }

// // INTEGRATIONS
// export const graphqlPrismaIntegration: Integration = {
//   type: ApiType.GRAPHQL,
//   integration: ApiIntegration.GRAPHQL_PRISMA,
//   label: ApiIntegrationLabel.GPI,
//   prefix: Prefix.GRAPHQL,
// };

// export const restMongooseIntegration: Integration = {
//   type: ApiType.REST,
//   integration: ApiIntegration.REST_MONGOOSE,
//   label: ApiIntegrationLabel.RMI,
//   prefix: Prefix.REST,
// };
