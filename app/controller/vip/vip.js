/**
 * Created by yxj on  2019/8/16
 */
'use strict';

const BaseController = require('../base');

class downloadController extends BaseController {
    async vipdetail() {
        const token = this.ctx.request.query.token || '';
        const sign = this.sign({}, token);
        const params = {token, sign};
        const result = await this.javaPost(this.app.I.getVipStatus.url, params);
        await this.ctx.render('vip/vipdetail', {token: token, result: JSON.stringify(result),data: this.config.info});
    }

    // 查询VIP增值服务状态
    async valueAddedService() {
        const token = this.ctx.request.body.token;
        const sign = this.sign({}, token);
        const params = {token, sign};
        const result = await this.javaPost(this.app.I.valueAddedService.url, params);
        this.ctx.body = result;
    }

    // 修改VIP增值服务状态
    async changeValueAddedService() {
        const token = this.ctx.request.body.token;
        const valueAddedService = this.ctx.request.body.valueAddedService;
        console.log(typeof(valueAddedService))
        console.log("valueAddedService:"+valueAddedService)
        const sign = this.sign({valueAddedService: valueAddedService}, token);
        const params = {token, sign, valueAddedService: valueAddedService};
        const result = await this.javaPost(this.app.I.changeValueAddedService.url, params);
        this.ctx.body = result;
    }
}


module.exports = downloadController;
