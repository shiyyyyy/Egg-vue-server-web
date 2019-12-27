/**
 * Created by qianggao on  2019/4/19
 */
'use strict';

const BaseController = require('../base');
class withdrawController extends BaseController {
  // 提现成功页
  async result() {
    const r = this.ctx.request.query.r;
    await this.ctx.render('withdraw/result', { r });
  }
}

module.exports = withdrawController;
