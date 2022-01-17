/* eslint-disable @typescript-eslint/no-explicit-any */
import { AssertionError } from 'assert';

// see @hqoss/guards

export class AssertionUtils {
  static assertIsNumber(val: unknown): asserts val is number {
    if (typeof val !== 'number') {
      throw new AssertionError({ message: 'Not a number!' });
    }
  }

  static assertIsString(val: unknown): asserts val is string {
    if (typeof val !== 'string') {
      throw new AssertionError({ message: 'Not a string!' });
    }
  }
}
