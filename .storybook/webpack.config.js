/* eslint-disable jsx-a11y/href-no-hash */
const path = require("path");
module.exports = {
  module: {
    rules: [
      {
        test: /\.yaml$/,
        include: path.resolve('data'),
        loader: 'yaml',
      }
    ],
  },
  resolve: {
    alias: {
      "themes": path.resolve("./src/themes"),
      "tokens": path.resolve("./src/tokens/tokens"),
      "storybook:components": path.resolve("./.storybook/components"),
    },
  },
};
