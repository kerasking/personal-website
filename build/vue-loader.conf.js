var utils = require('./utils');
var config = require('./../config/index');
var isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  buble: {
    objectAssign: 'Object.assign'
  }
};
