/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DynamicModule,
  ForwardReference,
  Provider,
  Type,
} from '@nestjs/common';

export type NestControllersType = Type<any>[] | undefined;

export type NestImportsType = Array<
  Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference
>;

export type NestProvidersType = Provider<any>[] | undefined;
