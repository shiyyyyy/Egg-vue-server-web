/**
 * Created by yxj on  2019/8/16
 */
'use strict';

const BaseController = require('../base');
class downloadController extends BaseController {
  async download() {
    await this.ctx.render('download/download', { data: this.config.info });
  }
  async about() {
    await this.ctx.render('download/about', { data: this.config.info });
  }
}
module.exports = downloadController;
