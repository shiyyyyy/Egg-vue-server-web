/**
 * Created by yxj on  2019/8/16
 */
'use strict';

const BaseController = require('../base');

class supportController extends BaseController {
    async supportShow() {
       await this.ctx.render('support/support', { data: this.config.info });
    }
}


module.exports = supportController;
