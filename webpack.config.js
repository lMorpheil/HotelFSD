const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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

const common = merge([
  {
    entry: {
      main: './src/pages/main/main.js',
      registration: './src/pages/registration/registration.js',
      login: './src/pages/login/login.js',
      'search-room': './src/pages/search-room/search-room.js',
      'room-details': './src/pages/room-details/room-details.js',
      colors: './src/pages/colors/colors.js',
      forms: './src/pages/forms/forms.js',
      cards: './src/pages/cards/cards.js',
      'headerfooter': './src/pages/headerfooter/header & footer.js',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'main.html',
        template: './src/pages/main/main.pug',
        chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
        filename: 'registration.html',
        template: './src/pages/registration/registration.pug',
        chunks: ['registration'],
      }),
      new HtmlWebpackPlugin({
        filename: 'login.html',
        template: './src/pages/login/login.pug',
        chunks: ['login'],
      }),
      new HtmlWebpackPlugin({
        filename: 'search-room.html',
        template: './src/pages/search-room/search-room.pug',
        chunks: ['search-room'],
      }),
      new HtmlWebpackPlugin({
        filename: 'room-details.html',
        template: './src/pages/room-details/room-details.pug',
        chunks: ['room-details'],
      }),
      new HtmlWebpackPlugin({
        filename: 'cards.html',
        template: './src/pages/cards/cards.pug',
        chunks: ['cards'],
      }),
      new HtmlWebpackPlugin({
        filename: 'colors.html',
        template: './src/pages/colors/colors.pug',
        chunks: ['colors'],
      }),
      new HtmlWebpackPlugin({
        filename: 'forms.html',
        template: './src/pages/forms/forms.pug',
        chunks: ['forms'],
      }),
      new HtmlWebpackPlugin({
        filename: 'header & footer.html',
        template: './src/pages/headerfooter/header & footer.pug',
        chunks: ['header & footer'],
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
      }),
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'src/assets/images',
            to: 'images/[path][name].[ext]',
          },
        ],
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
