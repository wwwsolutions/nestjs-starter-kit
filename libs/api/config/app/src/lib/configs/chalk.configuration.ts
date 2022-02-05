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
  colorBlue: process.env.THEME_COLOR_BLUE as string,
  colorIndigo: process.env.THEME_COLOR_INDIGO as string,
  colorPurple: process.env.THEME_COLOR_PURPLE as string,
  colorPink: process.env.THEME_COLOR_PINK as string,
  colorRed: process.env.THEME_COLOR_RED as string,
  colorOrange: process.env.THEME_COLOR_ORANGE as string,
  colorYellow: process.env.THEME_COLOR_YELLOW as string,
  colorGreen: process.env.THEME_COLOR_GREEN as string,
  colorTeal: process.env.THEME_COLOR_TEAL as string,
  colorCyan: process.env.THEME_COLOR_CYAN as string,
  colorGray: process.env.THEME_COLOR_GRAY as string,
  colorBlack: process.env.THEME_COLOR_BLACK as string,

  get info() {
    return chalk.bold.hex(this.colorBlack).bgHex(this.colorYellow);
  },

  get success() {
    return chalk.bold.hex(this.colorBlack).bgHex(this.colorGreen);
  },

  get warning() {
    return chalk.bold.hex(this.colorBlack).bgHex(this.colorOrange);
  },

  get danger() {
    return chalk.bold.hex(this.colorBlack).bgHex(this.colorRed);
  },

  get result() {
    return chalk.bold.hex(this.colorPurple).bgHex(this.colorBlack);
  },
}));

export type ChalkConfiguration = ConfigType<typeof chalkConfiguration>;

export const InjectChalkConfig = () => Inject(chalkConfiguration.KEY);
