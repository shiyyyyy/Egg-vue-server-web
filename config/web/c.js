/*
 * @Author: qianggao
 * @Date: 2019-10-06 08:58:50
 * @LastEditors: 刘驰
 * @LastEditTime: 2019-10-06 09:07:32
 * @Description: 类描述
 */
'use strict';
const headUrls = {
  dev: 'http://47.105.78.210:11420',
  // head210: 'http://47.105.78.210:17420',   // v1 java 接口地址
  head210: 'http://47.105.78.210:17420',      // v2 java 接口地址
  head118: 'http://47.97.46.201:11420/yinduo-api',
  prod: 'http://121.40.126.44:17420', //
};

module.exports = {
  // 开发环境
  development: {
    port: 10042,
    alinode: {
      enable: false, // 是否启动alinode
      id: '82397',
      secret: '59f20521961c9632ca5b19fdb1d51f3a8be65ced',
    },
    // 端口号
    api: {
      url_head: headUrls.head210, // 接口地址
      options: {
        json: true, // 是否是json
        gzip: true, // 是否gzip
        timeout: 55000, // 超时时间
      },
    },
  },
  // 测试环境
  test210: {
    port: 10042,
    alinode: {
      enable: false, // 是否启动alinode
      id: '82397',
      secret: '59f20521961c9632ca5b19fdb1d51f3a8be65ced',
    },
    // 端口号
    api: {
      url_head: headUrls.head210, // 接口地址
      options: {
        json: true, // 是否是json
        gzip: true, // 是否gzip
        timeout: 55000, // 超时时间
      },
    },
  },
  test118: {
    port: 10042,
    alinode: {
      enable: false, // 是否启动alinode
      id: '82397',
      secret: '59f20521961c9632ca5b19fdb1d51f3a8be65ced',
    },
    // 端口号
    api: {
      url_head: headUrls.head118, // 接口地址
      options: {
        json: true, // 是否是json
        gzip: true, // 是否gzip
        timeout: 55000, // 超时时间
      },
    },
  },
  // 生产环境
  prod: {
    port: 10042,
    alinode: {
      enable: true, // 是否启动alinode
      id: '82397',
      secret: '59f20521961c9632ca5b19fdb1d51f3a8be65ced',
    },
    // 端口号
    api: {
      url_head: headUrls.prod, // 接口地址
      options: {
        json: true, // 是否是json
        gzip: true, // 是否gzip
        timeout: 55000, // 超时时间
      },
    },
  },
};
