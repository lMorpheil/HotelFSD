const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');
const fs = require('fs');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};
const PAGES_DIR = `${PATHS.source}/pages/`;
const PAGES = fs.readdirSync(PAGES_DIR).filter((fileName) => fileName.endsWith('.pug'));

const common = merge([
  {
    entry: {
      main: './src/pages/main/main.js',
      registration: './src/pages/registration/registration.js',
      login: './src/pages/login/login.js',
      'search-room': './src/pages/search-room/search-room.js',
      'room-details': './src/pages/room-details/room-details.js',
      'UI KIT': './src/pages/UI KIT/UI KIT.js',
    },
    output: {
      filename: '[name].js',
      path: __dirname + '/dist'
    },
    plugins: [
      ...PAGES.map(
        (page) =>
          new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/, '.html')}`,
            minify: false,
          // template: './src/pages/room-details/room-details.pug',
          }),
      ),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
      }),
    ],
  },
  fonts(),
  pug(),
  images(),
]);

module.exports = function(env) {
  if (env === 'production') {
    return merge([common, extractCSS, css()]);
  }
  if (env === 'development') {
    return merge([common, devserver(), sass(), css()]);
  }
};
