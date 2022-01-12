import { Float, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class ApiCoreResolver {
  @Query(() => Float)
  uptime() {
    return process.uptime();
  }
}
