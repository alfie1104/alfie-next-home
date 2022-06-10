import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    black: {
      veryDark: string;
      dark: string;
      light: string;
    };
    white: {
      veryDark: string;
      dark: string;
      light: string;
    };
    green: {
      dark: string;
      light: string;
    };
    blue: {
      dark: string;
      light: string;
    };
  }
}
