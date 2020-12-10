const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const pug = require("./webpack/pug");
const devserver = require("./webpack/devserver");
const sass = require("./webpack/sass");
const css = require("./webpack/css");
const extractCSS = require("./webpack/css.extract");
const uglifyJS = require("./webpack/js.uglify");
const images = require("./webpack/images");
const fonts = require("./webpack/fonts");



const PATHS = {
  source: path.join(__dirname, "src"),
  build: path.join(__dirname, "build"),
};

const common = merge([
  {
    entry: {
      index: PATHS.source + "/toxin/index.js"
    },
    output: {
      path: PATHS.build,
      filename: "[name].js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: PATHS.source + "/toxin/index.pug",
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery'",
        "window.$": "jquery"
      }),
    ],
  },
  fonts(),
  pug(),
  images(),
  
]);

module.exports = function (env) {
  if (env === "production") {
    return merge([common, extractCSS, css()]);
  }
  if (env === "development") {
    return merge([common, devserver(), sass(), css()]);
  }
};
