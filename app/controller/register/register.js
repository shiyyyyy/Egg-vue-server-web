/**
 * Created by yxj on  2019/8/16
 */
'use strict';

const BaseController = require('../base');
class registerController extends BaseController {
  async register() {

    await this.ctx.render('register/register', { data: this.config.info });
  }

  async getCode() {
    const idParams = {
      mobile: this.ctx.request.body.mobile,
      type:'1',
      ip:this.ctx.request.ip
    };
    console.log("打印参数")
    console.log(idParams)
    const result = await this.javaPost(this.app.I.getCode.url, idParams);
    console.log("打印结果")
    console.log(result)
    this.ctx.body = result;
  }
  async registerUser() {
    const idParams = {
      mobile: this.ctx.request.body.mobile,
      authCode:this.ctx.request.body.authCode,
      ip: this.ctx.request.ip
    };
    const result = await this.javaPost(this.app.I.registerUser.url, idParams);
    this.ctx.body = result;
  }
}

module.exports = registerController;
