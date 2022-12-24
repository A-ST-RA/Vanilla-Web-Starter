const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
const path = require('path');
const sass = require('sass');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
  ],
  module: {
    rules: [{
      test: /\.sass$/i,
      use: [
        miniCss.loader,
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            implementation: sass,
          },
        }
      ],
    }]
  },
};