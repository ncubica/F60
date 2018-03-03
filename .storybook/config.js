import { configure } from "@storybook/react";
const req = require.context("../src/components", true, /\.story\.js$/);

configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
