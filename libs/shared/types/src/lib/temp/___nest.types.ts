/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DynamicModule,
  ForwardReference,
  Provider,
  Type,
} from '@nestjs/common';
import { ConfigFactory, ConfigObject } from '@nestjs/config';

export type NestControllersType = Type<any>[] | undefined;

export type NestImportsType =
  | Type<any>
  | DynamicModule
  | Promise<DynamicModule>
  | ForwardReference;

export type NestImportsTypes = Array<NestImportsType>;

export type NestProvidersType = Provider<any>[] | undefined;

export type Configs = ConfigFactory<ConfigObject>[] | undefined;
