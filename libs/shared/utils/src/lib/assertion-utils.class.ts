/* eslint-disable @typescript-eslint/no-explicit-any */
import { AssertionError } from 'assert';

// see @hqoss/guards

type ErrorMessage = { message: string };

export class AssertionUtils {
  static assert(
    condition: unknown,
    errorMessage: ErrorMessage = { message: 'Is not true!' }
  ): asserts condition {
    if (!condition) {
      throw new AssertionError(errorMessage);
    }
  }

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
    val: unknown,
    errorMessage: ErrorMessage = { message: 'Not a object!' }
  ): asserts val is object {
    if (typeof val !== 'object' || val === null) {
      throw new AssertionError(errorMessage);
    }
  }

  static assertIsNonEmptyArrayOfStrings(
    val: unknown,
    errorMessage: ErrorMessage = {
      message: 'Not empty array or is not an array of string!',
    }
  ): asserts val is object {
    if (
      Array.isArray(val) &&
      val.length > 0 &&
      val.every((item) => typeof item === 'string')
    ) {
      throw new AssertionError(errorMessage);
    }
  }
}
