'use strict';
// 借款流程
const BaseController = require('../base');
class ProcedureController extends BaseController {
  async index() {
    await this.ctx.render('procedure/index');
  }
}

module.exports = ProcedureController;
