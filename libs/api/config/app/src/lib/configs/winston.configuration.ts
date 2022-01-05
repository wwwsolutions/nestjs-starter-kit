import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';
import * as winston from 'winston';
import { LoggerOptions } from 'winston';
import { utilities as nestWinstonModuleUtilities } from 'nest-winston';

import { ConversionUtils } from '@wwwsolutions/shared/utils';

export const winstonConfiguration = registerAs('winston', () => ({
  levelConsole: process.env.WINSTON_LEVEL_CONSOLE,
  prettyPrint: ConversionUtils.convertToBoolean(
    process.env.WINSTON_PRETTY_PRINT as string
  ),
  levelFile: process.env.WINSTON_LEVEL_FILE,
  filePath: process.env.WINSTON_FILE_PATH,

  get options(): LoggerOptions {
    return {
      transports: [
        // According to 'The Twelve-Factor App' for distributed apps methodology - DO NOT USE FILE LOGS
        // new winston.transports.File({
        //   level: this.levelFile,
        //   filename: `${process.cwd()}/${this.filePath}`,
        // }),
        new winston.transports.Console({
          level: this.levelConsole,
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike('AGPI', {
              prettyPrint: this.prettyPrint as boolean,
            })
          ),
        }),
        // other transports...
      ],
    };
  },
}));

export type WinstonConfiguration = ConfigType<typeof winstonConfiguration>;

export const InjectWinstonConfig = () => Inject(winstonConfiguration.KEY);
