/* eslint-disable @typescript-eslint/no-explicit-any */
import * as path from 'path';

export class DebugUtils {
  static debugEnvVariables(localPath: string, contextName: string): any {
    try {
      console.log(
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require('dotenv').config({
          debug: true,
          path: path.resolve(localPath),
        }),
        contextName
      );
    } catch (error) {
      console.log(error);
    }
  }
}
