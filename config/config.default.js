/* eslint valid-jsdoc: "off" */
'use strict';
const path = require('path');
const c = require('./web/c')[process.env.EGG_SERVER_ENV || 'development'];
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  config.info = {
    appName: '小银号',
    companyName: '鑫盛富通金融服务外包（北京）有限公司',
    companyShortName:'鑫盛富通',
    importantCompanyName:'鑫盛富通金融服务外包（北京）有限公司',
    importantCompanyShortName:'鑫盛富通',
    corporation: '魏金龙',
    creditCode: '9111010105VA008WGA1F',
    zhifubaoInfo: 'yichunxi8@126.com',
    zhifubaoName: '哈尔滨奕春希生物科技有限公司',
    version: '1.0',
    date: '2019年01月01',
    companyAddress: '北京市通州区环科中路16号17幢4层101-409',
    telephone: '18724592891',
    android:'https://ydxffq.oss-cn-hangzhou.aliyuncs.com/ydxffqprod/app/upgrade/test/xiaoyinhao_1.0.apk',
    ios:'https://ydxffq.oss-cn-hangzhou.aliyuncs.com/ydxffqprod/app/upgrade/test/ConsumptionStaging.plist',
    webUrl: 'http://192.168.50.92:10043/#/passport/newPage'
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1551852103446_7789';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.cluster = {
    listen: {
      port: c.port,
    },
  };
  config.view = {
    mapping: { '.html': 'ejs' }, //  左边写成.html后缀，会自动渲染.html文件
  };
  // 错误信息
  config.errMsg = {
    status: 0,
    msg: '服务器暂无响应, 请稍后再试!',
  };
  // 日志
  config.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(appInfo.baseDir, 'logs'),
  };

  // 日志按小时分割
  config.logrotator = {
    filesRotateByHour: [
      path.join(appInfo.baseDir, 'logs', appInfo.name, 'common-error.log'),
    ],
  };
  // 配置csrf
  config.security = {
    csrf: {
      // headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-tokenß
      queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
      bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
    },
    xframe: {
      enable: false,
    },
  };

  if (c.alinode.enable) {
    // 阿里性能平台配置
    config.alinode = {
      // 从 `Node.js 性能平台` 获取对应的接入参数
      server: 'wss://agentserver.node.aliyun.com:8080',
      appid: c.alinode.id,
      secret: c.alinode.secret,
      logdir: c.alinode.logdir
    }
  }
  return {
    ...config,
    ...userConfig,
  };
};
