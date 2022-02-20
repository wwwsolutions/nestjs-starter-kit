/* eslint-disable @typescript-eslint/no-explicit-any */
import { DynamicModule, ForwardReference, Type } from '@nestjs/common';

export type NestImportsType =
  | Type<any>
  | DynamicModule
  | Promise<DynamicModule>
  | ForwardReference;
