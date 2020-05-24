import { yellow, green, grey, red, neutral } from './colors';
import { primaryFont } from './typography';

export const defaultTheme = {
    backgroundColor: neutral[100],
    primaryColor: red[100],
    secondaryColor: grey[100],
    tertiaryColor: red[100],
    primaryColorHover: red[200],
    primaryColorActive: red[100],
    textColorOnPrimary: neutral[100],
    textColor: neutral[600],
    textColorInverted: neutral[100],
    formElementBackground: neutral[100],
    textOnFormElementBackground: neutral[600],
    disabled: neutral[400],
    textOnDisabled: neutral[300],
    primaryFont,
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
      }
}

export const darkTheme = {
    backgroundColor: neutral[300],
    primaryColor: neutral[600],
    primaryHoverColor: neutral[200],
    primaryActiveColor: neutral[300],
    textColorOnPrimary: red[300],
    textColor: red[300],
    textColorInverted: neutral[100],
    primaryFont: primaryFont,
    disabled: neutral[400],
    textOnDisabled: neutral[300],
    formElementBackground: neutral[600],
    textOnFormElementBackground: neutral[100],
    status: {
      warningColor: yellow[100],
      warningColorHover: yellow[200],
      warningColorActive: yellow[300],
      errorColor: red[100],
      errorColorHover: red[200],
      errorColorActive: red[300],
      successColor: green[100],
      successColorHover: green[200],
      successColorActive: green[300]
    }
  };