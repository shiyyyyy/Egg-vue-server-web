/**
 * Created by qianggao on  2019/3/9
 */
'use strict';
const BaseController = require('../base');
class msgCenterController extends BaseController {
  async index() {
    await this.ctx.render('msgCenter/index');
  }
}

module.exports = msgCenterController;
