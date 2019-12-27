/**
 * Created by qianggao on  2019/3/7 111
 */
'use strict';
const c = require('./config/web/c')[process.env.EGG_SERVER_ENV || 'development'];
const i = require('./config/web/i');

module.exports = app => {
  app.once('server', server => {
    // 配置文件
    app.C = c.api;
    // 接口地址
    app.I = i;
    console.log(`系统启动 🌐 监听端口 💻 ${app.config.cluster.listen.port} 运行 ${process.env.EGG_SERVER_ENV || 'dev'} 模式`);
  });
};
