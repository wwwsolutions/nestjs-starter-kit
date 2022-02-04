import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';

import chalk from 'chalk';

export const chalkConfiguration = registerAs('chalk', () => ({
  // primaryColor: process.env.THEME_PRIMARY_COLOR as string,
  // secondaryColor: process.env.THEME_SECONDARY_COLOR as string,
  // successColor: process.env.THEME_SUCCESS_COLOR as string,
  // infoColor: process.env.THEME_INFO_COLOR as string,
  // warningColor: process.env.THEME_WARNING_COLOR as string,
  // dangerColor: process.env.THEME_DANGER_COLOR as string,
  // lightColor: process.env.THEME_LIGHT_COLOR as string,
  // darkColor: process.env.THEME_DARK_COLOR as string,
  blue: process.env.THEME_COLOR_BLUE as string,
  indigo: process.env.THEME_COLOR_INDIGO as string,
  purple: process.env.THEME_COLOR_PURPLE as string,
  pink: process.env.THEME_COLOR_PINK as string,
  red: process.env.THEME_COLOR_RED as string,
  orange: process.env.THEME_COLOR_ORANGE as string,
  yellow: process.env.THEME_COLOR_YELLOW as string,
  green: process.env.THEME_COLOR_GREEN as string,
  teal: process.env.THEME_COLOR_TEAL as string,
  cyan: process.env.THEME_COLOR_CYAN as string,
  gray: process.env.THEME_COLOR_GRAY as string,
  black: process.env.THEME_COLOR_BLACK as string,

  get info() {
    return chalk.bold.hex(this.black).bgHex(this.gray);
  },

  get success() {
    return chalk.bold.hex(this.black).bgHex(this.green);
  },

  get warning() {
    return chalk.bold.hex(this.black).bgHex(this.orange);
  },

  get danger() {
    return chalk.bold.hex(this.black).bgHex(this.red);
  },

  get result() {
    return chalk.bold.hex(this.purple).bgHex(this.black);
  },
}));

export type ChalkConfiguration = ConfigType<typeof chalkConfiguration>;

export const InjectChalkConfig = () => Inject(chalkConfiguration.KEY);
