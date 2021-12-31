import { Module } from '@nestjs/common';

@Module({
  imports: [
    /* <REQUIRED>
     *
     * REGISTER SINGLE INTEGRATION MODULE DEPENDING ON
     * WHICH API IMPLEMENTATION YOU WANT TO UTILIZE
     *
     * <various integrations>
     *
     *    ApiGraphqlPrismaIntegrationModule
     *    ApiRestPrismaIntegrationModule
     *    ApiRestMongooseIntegrationModule
     *    ApiRestTypeormIntegrationModule
     *
     */
    // ApiGraphqlPrismaIntegrationModule,
    /* <OPTIONAL>
     *
     * REGISTER DOMAIN FEATURE MODULES
     * THESE MODULES HOLD BUSINESS LOGIC
     *
     * <examples>
     *
     *    ApiGraphqlUsersFeatureModule,
     *    ApiGraphqlAuthenticationFeatureModule,
     *    ApiGraphqlRolesFeatureModule,
     *
     */
    // ApiGraphqlUsersFeatureModule,
  ],
  providers: [
    /* <OPTIONAL>
     *
     * IN CASE OF GRAPHQL INTEGRATION REGISTER RESOLVERS
     *
     * <examples>
     *
     *    ApiCoreResolver,
     */
    // ApiCoreResolver,
  ],
  controllers: [
    /* <OPTIONAL>
     *
     * IN CASE OF REST INTEGRATION REGISTER CONTROLLERS
     *
     * <examples>
     *
     *    ApiCoreController,
     */
    // ApiCoreController,
  ],
})
export class ApiCoreModule {}
