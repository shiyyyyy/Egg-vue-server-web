'use strict';
const crypto = require('crypto');
const Controller = require('egg').Controller;

class BaseController extends Controller {

    /**
     * 请求接口基类JAVA_GET方法
     * @param uri 接口地址
     * @param params 请求参数
     * @return {Promise<any>}
     */
    async javaGet(uri, params) {
        try {
            // 获取接口地址
            const url = this.app.C.url_head + uri;
            this.logger.info('用户：' + (this.ctx.session.user == undefined ? '游客' : this.ctx.session.user.mobile) + ', 调用 java get 接口地址：' + url + ', 接口参数：' + JSON.stringify(params));
            // 调用请求方式, 必须是get请求
            const result = await this.ctx.curl(url, {
                method: 'get',
                // dataType: 'json',
                data: params,
            });
            this.logger.info('用户：' + (this.ctx.session.user == undefined ? '游客' : this.ctx.session.user.mobile) + ', 调用 java get 接口数据：' + JSON.stringify(decodeURIComponent(result.data)));
            // 返回json数据
            return JSON.parse(decodeURIComponent(result.data));
        } catch (e) {
            this.logger.error('java接口出错，出错接口：' + JSON.stringify(uri) + ', 接口参数：' + JSON.stringify(params) + ', 错误信息：' + e);
            this.error(e);
            return Promise.resolve(e);
        }
    }

    /**
     * 请求接口基类JAVA_POST方法
     * @param uri 接口地址
     * @param params 请求参数
     * @return {Promise<any>}
     */
    async javaPost(uri, params) {
        console.log(uri);
        console.log(params);
        try {
            // 获取接口地址
            const url = this.app.C.url_head + uri;
            this.logger.info('用户：' + (this.ctx.session.user == undefined ? '游客' : this.ctx.session.user.mobile) + ', 调用 java post 接口地址：' + url + ', 接口参数：' + JSON.stringify(params));
            // 调用请求方式, 必须是get请求
            const result = await this.ctx.curl(url, {
                method: 'post',
                // dataType: 'json',
                data: params,
            });
            this.logger.info('用户：' + (this.ctx.session.user == undefined ? '游客' : this.ctx.session.user.mobile) + ', 调用 java post 接口数据：' + JSON.stringify(decodeURIComponent(result.data)));
            // 返回json数据
            return JSON.parse(decodeURIComponent(result.data));
        } catch (e) {
            this.logger.error('java接口出错，出错接口：' + JSON.stringify(uri) + ', 接口参数：' + JSON.stringify(params) + ', 错误信息：' + e);
            this.error(e);
            return Promise.resolve(e);
        }
    }

    /**
     * 错误数据输出
     * @param{e} e 错误信息
     */
    async error(e) {
        this.logger.error('错误信息：' + e);
        this.logger.error('错误位置：' + e.stack);
    }

    /**
     * 404返回
     * @param{e} e 错误信息
     */
    async noPage() {
        await this.ctx.redirect('/');
    }

    async render(target, params) {
        console.info(params)
        if (params.oldData.code == 'L00001') {
            await this.ctx.render('404/404', params);
        } else {
            await this.ctx.render(target, params);
        }
    }

    //
    // /**
    //  * 随机字符串
    //  */
    // async createNonceStr() {
    //   return Math.random().toString(36).substr(2, 15);
    // }
    // /**
    //  * 时间戳
    //  */
    // async createTimestamp() {
    //   return parseInt(new Date().getTime() / 1000).toString();
    // }

    /**
     * 拼接字符串
     * @param {*} args
     */
    rawString(args, token) {
        let keys = Object.keys(args);
        keys = keys.sort();
        const newArgs = {};
        keys.forEach(function (key) {
            newArgs[key] = args[key];
            // newArgs[key.toLowerCase()] = args[key];
        });
        let string = '';
        for (const k in newArgs) {
            string += '&' + k + '=' + newArgs[k];
        }
        if (string.length !== 0) {
            string = string.substr(1) + token;
        } else {
            string = token;
        }
        return string;
    }

    /**
     * 签名
     * @param {*} url
     */
    sign(ret, token) {
        const _this = this;
        const string = _this.rawString(ret, token);
        const str = _this.md5(string);
        return str;
    }

    md5(msg) {
        return crypto.createHash('md5').update(msg.toString()).digest('hex')
            .toLowerCase();
    }
}

module.exports = BaseController;
