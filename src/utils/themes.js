import { neutral, green, yellow, purple } from "./colors";
import { primaryFont, secondaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: neutral[900],
  accentColor: purple[700],
  primaryColorHover: neutral[1000],
  backTextColor: neutral[600],
  backTextColorHover: neutral[700],
  backIconColor: neutral[500],
  backIconColorHover: neutral[600],
  primaryFont,
  secondaryFont,
  ratingColorGreat: green[900],
  ratingBackgroundGreat: green[100],
  ratingBorderGreat: green[300],
  ratingColorGood: yellow[900],
  ratingBackgroundGood: yellow[100],
  ratingBorderGood: yellow[300],
  numberOfSeasonsColor: neutral[500],
  overviewColor: neutral[700],
  starringColor: neutral[600],
  overviewSeparatorColor: neutral[200],
  trailerTitleColor: neutral[900],
  discoverTitleDefaultColor: neutral[1000],
  discoverTitleAccentColor: purple[800],
};
