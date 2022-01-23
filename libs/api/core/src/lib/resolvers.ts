import { NestProvidersType } from './types/nest.types';
import { ApiCoreResolver } from './resolvers/api-core.resolver';

/* <REQUIRED>
 *
 * IN CASE OF GRAPHQL INTEGRATION, REGISTER RESOLVERS
 *
 * All servers running with GraphQL must have at least one @Query() to be considered a valid GraphQL server.
 * Without it, the apollo-server package will throw an exception and the server will fail to start.
 *
 */

export const resolvers: NestProvidersType = [ApiCoreResolver];
