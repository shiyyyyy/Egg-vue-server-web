'use strict';
// 帮助中心
const BaseController = require('../base');
class repaymentController extends BaseController {
  // 还款帮助页面
  async repaymentHelpPage() {
    await this.ctx.render('repayment/repaymentHelp');
  }
  // 还款帮助
  async repaymentHelp() {
    const result = await this.javaGet(this.app.I.repaymentHelp.url, '');
    result.zhifubaoInfo= this.config.info.zhifubaoInfo;
    this.ctx.body = result;
  }
  // 还款方式
  async repaymentType() {
    const amount = this.ctx.request.query.amount || '';
    const zhifubaoInfo = this.config.info.zhifubaoInfo;
    const zhifubaoName = this.config.info.zhifubaoName;
    await this.ctx.render('repayment/repaymentType', { amount, zhifubaoInfo, zhifubaoName });
  }
}

module.exports = repaymentController;
