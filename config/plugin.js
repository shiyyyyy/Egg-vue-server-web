'use strict';
const config = require('./web/c')[process.env.EGG_SERVER_ENV || 'development']
/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },
  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  },
  alinode: {
    enable: config.alinode.enable,
    package: 'egg-alinode',
  }
};
