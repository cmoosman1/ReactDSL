import { create } from "@storybook/theming/create";

export default create({
  base: "light",

  colorPrimary: "#E01933",
  colorSecondary: "#003087",

  // UI
  appBg: "white",
  appContentBg: "silver",
  appBorderColor: "grey",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "silver",
  barSelectedColor: "black",
  barBg: "#E01933",

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "Brand Custom Theme",
  brandUrl: "https://example.com",
  brandImage: "https://placehold.it/350x150"
});