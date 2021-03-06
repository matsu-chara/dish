'use strict';

module.exports = {
  ava: {
    files: [
      'test/**/*.js'
    ],
    concurrency: 5,
    failFast   : true,
    tap        : true,
    require    : [
      'ignore-styles',
      'babel-register'
    ],
    babel: 'inherit'
  }
};
