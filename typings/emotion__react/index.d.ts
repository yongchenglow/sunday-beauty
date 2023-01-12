import type { Theme as MuiTheme } from '@material-ui/core';

declare module '@emotion/react' {
  // eslint-disable-next-line no-unused-vars
  interface Theme extends MuiTheme {}
}
