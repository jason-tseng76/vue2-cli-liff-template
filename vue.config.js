/* eslint import/no-extraneous-dependencies:0 global-require:0 */
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const path = require('path');
// const fs = require('fs');
const webpack = require('webpack');

process.env.APP_ENV = process.env.APP_ENV || 'development';
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// const plugins = [
//   {
//     from: path.resolve('src/assets/content/*.js'),
//     to: path.resolve('dist/content/[name].js'),
//   },
//   {
//     from: path.resolve('src/assets/content/*.css'),
//     to: path.resolve('dist/content/[name].css'),
//   },
//   {
//     from: path.resolve('src/assets/*.png'),
//     to: path.resolve('dist/[name].png'),
//   },
// ];

module.exports = {
  // pages: pagesObj,
  publicPath: process.env.APP_ENV === 'production' ? '/liff/' : '/',
  productionSourceMap: process.env.NODE_ENV === 'development',
  configureWebpack: {
    // resolve: {
    //   alias: {
    //     '~': path.join(__dirname, 'src'),
    //   },
    // },
    plugins: [
      // new CopyWebpackPlugin(plugins),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV),
        // 'process.env.SAMPLE_URL': JSON.stringify(sampleurl),
        // 'process.env.SAMPLE_HTML': JSON.stringify(samplehtml),
        // 'process.env.SAMPLE': process.env.APP_ENV === 'development' ? JSON.stringify(require('./src/testhtml')) : "''",
      }),
    ],
  },
};
