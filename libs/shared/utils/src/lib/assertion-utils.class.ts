/* eslint-disable @typescript-eslint/no-explicit-any */
import { AssertionError } from 'assert';

// see @hqoss/guards

type ErrorMessage = { message: string };

export class AssertionUtils {
  static assertIsNumber(
    val: unknown,
    errorMessage: ErrorMessage = { message: 'Not a number!' }
  ): asserts val is number {
    if (typeof val !== 'number') {
      throw new AssertionError(errorMessage);
    }
  }

  static assertIsString(
    val: unknown,
    errorMessage: ErrorMessage = { message: 'Not a string!' }
  ): asserts val is string {
    if (typeof val !== 'string') {
      throw new AssertionError(errorMessage);
    }
  }

  static assertIsObject(
    obj: unknown,
    errorMessage: ErrorMessage = { message: 'Not a object!' }
  ): asserts obj is object {
    if (typeof obj !== 'object' || obj === null) {
      throw new AssertionError(errorMessage);
    }
  }
}
