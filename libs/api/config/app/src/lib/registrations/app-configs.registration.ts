/* eslint-disable @typescript-eslint/no-explicit-any */
import { environmentConfiguration } from '../configs/environment.configuration';
import { appConfiguration } from '../configs/app.configuration';
import { winstonConfiguration } from '../configs/winston.configuration';

/* <OPTIONAL>
 *
 * Register app configs
 *
 */

export const appConfigsObjects: any = [
  environmentConfiguration,
  appConfiguration,
  winstonConfiguration,
];
