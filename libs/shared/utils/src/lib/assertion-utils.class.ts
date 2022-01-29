import { AssertionError } from 'assert';

// source
// https://www.npmjs.com/package/@hqoss/guards

// TODO: fix error
// TODO: write tests

type ErrorMessage = { message: string };

export class AssertionUtils {
  static assert(
    condition: unknown,
    errorMessage: ErrorMessage = { message: `Expected 'val' to be truthy!` }
  ): asserts condition {
    if (!condition) {
      throw new AssertionError(errorMessage);
    }
  }

  static assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
    if (val === undefined || val === null) {
      throw new AssertionError({
        message: `Expected 'val' to be defined, but received ${val}`,
      });
    }
  }

  static assertIsNumber(
    val: unknown,
    errorMessage: ErrorMessage = { message: `Expected 'val' to be a number!` }
  ): asserts val is number {
    if (typeof val !== 'number') {
      throw new AssertionError(errorMessage);
    }
  }

  static assertIsString(
    val: unknown,
    errorMessage: ErrorMessage = { message: `Expected 'val' to be a string!` }
  ): asserts val is string {
    if (typeof val !== 'string') {
      throw new AssertionError(errorMessage);
    }
  }

  static assertIsObject(
    val: unknown,
    errorMessage: ErrorMessage = { message: `Expected 'val' to be an object!` }
  ): asserts val is object {
    if (typeof val !== 'object' || val === null) {
      throw new AssertionError(errorMessage);
    }
  }

  static assertIsNonEmptyArrayOfStrings(
    val: unknown,
    errorMessage: ErrorMessage = {
      message: `Expected 'val' to be an array of strings or not empty array!`,
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

  static assertIsNonEmptyArray<T, U>(
    val: Array<T> | U,
    errorMessage: ErrorMessage = {
      message: `Expected 'val' not to be an empty array!`,
    }
  ): asserts val is Array<T> {
    if (Array.isArray(val) && val.length > 0) {
      throw new AssertionError(errorMessage);
    }
  }
}
