/**
 * Created by qianggao on  2019/3/10
 */
'use strict';

const BaseController = require('../base');
class operatorController extends BaseController {
  async forgetPass() {
    await this.ctx.render('operator/forgetPass');
  }
}

module.exports = operatorController;
