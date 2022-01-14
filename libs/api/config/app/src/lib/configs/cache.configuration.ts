// import { Inject } from '@nestjs/common';
// import { ConfigType, registerAs } from '@nestjs/config';

// export const cacheConfiguration = registerAs('cache', () => ({
//   host: process.env.CACHE_HOST,
//   port: Number(process.env.CACHE_PORT),
//   ttl: Number(process.env.CACHE_TTL),
//   driver: process.env.CACHE_DRIVER,

//   get redis() {
//     return {
//       driver: process.env.CACHE_DRIVER || 'redis',
//       host: this.host,
//       port: this.port,
//       ttl: this.ttl,
//     };
//   },
// }));

// export type CacheConfiguration = ConfigType<typeof cacheConfiguration>;

// export const InjectCacheConfig = () => Inject(cacheConfiguration.KEY);
