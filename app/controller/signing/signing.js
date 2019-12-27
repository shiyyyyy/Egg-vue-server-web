/**
 * Created by qianggao on  2019/4/19
 */
'use strict';

const BaseController = require('../base');
class signingController extends BaseController {
  // 提现成功页
  async signingType() {
    const r = this.ctx.request.query.r;
    const loanId = this.ctx.request.query.id;
    const app = this.ctx.request.query.from;
    const token = this.ctx.request.query.token;
    const webUrl = this.config.info.webUrl;
    this.logger.info(`签约结果页: ${JSON.stringify(this.ctx.request.query)}`);
    await this.ctx.render('signing/signing', { r, loanId, app, token, webUrl });
  }
}

module.exports = signingController;
