import { addParameters } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./context";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { withDesign } from "storybook-addon-designs";

addParameters({
  backgrounds: [
    { name: "Default theme", value: "#ffffff", default: true },
    { name: "Dark theme", value: "#050449" }
  ]
});

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withDesign);