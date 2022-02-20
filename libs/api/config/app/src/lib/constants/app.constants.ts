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

// // INTEGRATIONS
// // export const graphqlPrismaIntegration: Integration = {
// //   type: ApiType.GRAPHQL,
// //   integration: ApiIntegration.GRAPHQL_PRISMA,
// //   label: ApiIntegrationLabel.GPI,
// //   prefix: Prefix.GRAPHQL,
// // };

// // export const restMongooseIntegration: Integration = {
// //   type: ApiType.REST,
// //   integration: ApiIntegration.REST_MONGOOSE,
// //   label: ApiIntegrationLabel.RMI,
// //   prefix: Prefix.REST,
// // };
